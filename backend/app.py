from flask import Flask, request, jsonify
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from dotenv import load_dotenv
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain
import os

# Load environment variables from the correct path
load_dotenv('backend/.env')


app = Flask(__name__)

class WaterXChatBot:
    def __init__(self):  # Corrected method name
        self.dataset = "waterx_agr.pdf"
        self.groq_api_key=os.getenv("GROQ_API_KEY")

    def setup_llm(self):
        llm = ChatGroq(
            groq_api_key=self.groq_api_key,
            model_name="llama3-8b-8192"
        )
        return llm

    def setup_custom_prompt(self):
        prompt = ChatPromptTemplate.from_template(
            """
            You are helpful assistant and providing solution on water scarcity issue like water efficient technique and method.
            Please provide the most accurate response based on the question
            <context>
            {context}
            <context>
            Questions:{input}
            """
        )
        return prompt

    def dataset_loader(self):
        try:
            loader = PyPDFLoader(self.dataset)
            docs = loader.load()
            txt_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
            final_docs = txt_splitter.split_documents(docs)
            return final_docs
        except FileNotFoundError:
            raise ValueError(f"PDF file not found at path: {self.dataset}")
        except Exception as e:
            raise ValueError(f"Error loading PDF: {str(e)}")

    def generate_vector_store(self):
        embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        vector_db = FAISS.from_documents(self.dataset_loader(), embeddings)
        return vector_db

    def setup_retrieval_chain(self):
        chain = create_stuff_documents_chain(self.setup_llm(), self.setup_custom_prompt())
        retriever = self.generate_vector_store().as_retriever()
        retrieval_chain = create_retrieval_chain(retriever, chain)
        return retrieval_chain

    def generate_responses(self, question):
        try:
            response = self.setup_retrieval_chain().invoke({
                "input": question
            })
            return response["answer"]
        except Exception as e:
            print(f"Error generating response: {str(e)}")
            raise

# API endpoint for chatbot
@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        
        if not data or 'question' not in data:
            return jsonify({'error': 'Question is required in the request body'}), 400
        
        question = data['question']
        
        # Initialize chatbot and generate response
        chatbot = WaterXChatBot()
        response = chatbot.generate_responses(question)
        
        return jsonify({
            'question': question,
            'response': response
        })
    
    except ValueError as ve:
        return jsonify({'error': str(ve)}), 400
    except Exception as e:
        return jsonify({'error': f"An error occurred: {str(e)}"}), 500

# Add a basic route for testing
@app.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'WaterX Chatbot API is running'}), 200

if __name__ == '__main__':  # Corrected entry point
    app.run(debug=True, port=5000)
