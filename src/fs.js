import { fileOpen, directoryOpen, fileSave  } from "browser-fs-access";

// Open all files in a directory,
// recursively including subdirectories.

async function fs() {
  
  const blobsInDirectory = await directoryOpen({
    recursive: true,
  });


  // Save a file.

    // blobsInDirectory.forEach( async function (blob) {
    //     await fileSave(blob, {
    //       fileName: blob.name,
    //       extensions: [".png"],
    //     });
    //   });
  

  console.log(blobsInDirectory);
}



export { fs  };
