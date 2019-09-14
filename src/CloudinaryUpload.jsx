import React, {Component} from "react";

export default class CloudinaryUpload extends Component{
    constructor(props){
        super(props);
        this.state = {
            cloudinarySetUp:{
                cloudName: 'my_cloud_name', 
                uploadPreset: 'my_preset'}
            };
        //this.uploadPresetCallback = uploadPresetCallback
        //this.eventListenerHandler = eventListenerHandler
    }

    uploadPresetCallback = (error, result) => {
        if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
          }
    }
    
    
    render(){
        return(
//             <div>
//                 <button id="upload_widget" class="cloudinary-button">Upload files</button>
//                 <script type="text/javascript">  
//                     {var myWidget = cloudinary.createUploadWidget({
//                     cloudName: 'my_cloud_name', 
//                     uploadPreset: 'my_preset'}, (error, result) => { 
//                     if (!error && result && result.event === "success") { 
//                         console.log('Done! Here is the image info: ', result.info); 
//                         }
//   }
// )}

// document.getElementById("upload_widget").addEventListener("click", function(){
//     myWidget.open();
//   }, false);
// </script>


{/* <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>  

<script type="text/javascript">  
var myWidget = cloudinary.createUploadWidget(this.state.cloudinarySetUp,this.uploadPresetCallback)
                eventListenerHandler = ()=>{
                    myWidget.open()
                }

document.getElementById("upload_widget").addEventListener("click", this.eventListenerHandler, false);
</script> */}
           // </div>
        )
    }

}