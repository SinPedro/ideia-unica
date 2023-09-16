import dynamic from "next/dynamic";

function tempo (request, response) {
     const dynamicDate = new Date();
}
     response.json({
        Date : dynamic.toGMTString()
     })

     export default tempo;