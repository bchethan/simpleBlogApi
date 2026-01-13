import fs from 'node:fs/promises'

export async function getData(jsonPath, res){try{
      const data = await fs.readFile(jsonPath,'utf8')
      
      res.end(data);
    }catch(err){
      console.log(err)
      res.end({
        "message":"error while loading data"
      })
}}