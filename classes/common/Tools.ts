export default class Tools {

    /**
     * Convert a base64 string in a Blob according to the data and contentType.
     * 
     * @param b64Data {String} Pure base64 string without contentType
     * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
     * @param sliceSize {Int} SliceSize to process the byteCharacters
     * @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
     * @return Blob
     */
    public b64toBlob(b64Data: string, contentType: string = '', sliceSize: number = 512) : Blob{
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
    }

    private fallbackCopyTextToClipboard(text, callback) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();      
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          callback({copied:successful});
          console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
          callback({copied:false});
        }
      
        document.body.removeChild(textArea);
    
    }
    public copyTextToClipboard(text, callback) {
        if (!navigator.clipboard) {
          this.fallbackCopyTextToClipboard(text, callback);
          return;
        }
        navigator.clipboard.writeText(text).then(function() {
          console.log('Async: Copying to clipboard was successful!');
          callback({copied:true});
        }, function(err) {
          console.error('Async: Could not copy text: ', err);
          callback({copied:false});
        });
    }

}