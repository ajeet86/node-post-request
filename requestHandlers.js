var querystring = require("querystring"),
fs = require("fs"),
formidable = require("formidable");
 util = require('util');

var file_name='qqq';


function start(response) {
console.log("Request handler 'start' was called.");
var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" '+
'content="text/html; charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/upload" enctype="multipart/form-data" '+
'method="post">'+
'<input type="file" name="upload" multiple="multiple">'+
'<input type="submit" value="Upload file" />'+
'</form>'+
'</body>'+
'</html>';
response.writeHead(200, {"Content-Type": "text/html"});
response.write(body);
response.end();
}



function upload(response, request) {
console.log("Request handler 'upload' was called.");


var form = new formidable.IncomingForm();


console.log("about to parse");
form.parse(request, function(error, fields, files) {
console.log("parsing done upload_image" + __dirname);
//console.log(files);
path_upload_flr=__dirname+'/upload_image/'+files.upload.name;
/* Possible error on Windows systems:
tried to rename to an already existing file */
fs.rename(files.upload.path, path_upload_flr, function(err) {
if (err) {
fs.unlink(path_upload_flr);
fs.rename(files.upload.path, path_upload_flr);
}
});
response.writeHead(200, {"Content-Type": "text/html"});
response.write("received image:<br/>"+files.upload.name);
response.write("<img src='/show' />");
 response.end(util.inspect({fields: fields, files: files}));
});


form.on('end', function(fields, files) {
						
        /* Temporary location of our uploaded file */
     var temp_path = this.openedFiles[0].path;
        /* The file name of the uploaded file */
         file_name = this.openedFiles[0].name;
        /*  file_name   Location where we want to copy the uploaded file */
      
 path_upload_flr=__dirname+'/upload_image/';
        fs.writeFile(temp_path, path_upload_flr + file_name, function(err) {  
            if (err) {
                console.error(err);
            } else {
                console.log("success!")
            }
        });
		
		
    });


}


function show(response) {
	//console.log(response);
	path_upload_flr=__dirname+'/upload_image/'+file_name;
	
console.log("Request handler 'show' was called."+path_upload_flr);

fs.readFile(path_upload_flr, "binary", function(error, file) {
if(error) {
response.writeHead(500, {"Content-Type": "text/plain"});
response.write(error + "\n");
response.end();
} else {
response.writeHead(200, {"Content-Type": "image/png"});
response.write(file, "binary");
response.end();
}
});
}
exports.start = start;
exports.upload = upload;
exports.show = show;