import pymysql
import os
from dotenv import load_dotenv

load_dotenv()

conn = pymysql.connect(host=os.getenv('DB_HOST'), 
                       user=os.getenv('DB_USER'), 
                       password=os.getenv('DB_PASSWORD'), 
                       db=os.getenv('DB_NAME'), 
                       port=int(os.getenv('DB_PORT')))