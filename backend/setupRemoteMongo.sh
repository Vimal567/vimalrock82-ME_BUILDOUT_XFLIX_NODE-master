# Setup file template to upload data to MongoDB Atlas
mongoimport --uri "mongodb+srv://vimal:vimal567@xflix-node.tpmpvzt.mongodb.net/?retryWrites=true&w=majority" --drop --collection videos --file data/export_xflix_videos.json
