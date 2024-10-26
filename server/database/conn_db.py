import pymysql
from core import settings

conn = pymysql.connect(host=settings.db_host,
                       user=settings.db_user, 
                       password=settings.db_password, 
                       db=settings.db_name, 
                       port=settings.db_port)