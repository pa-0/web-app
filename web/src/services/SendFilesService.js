class SendFilesService {
    send(file) {
        if (!window.ws) {
            return;
        }

        console.log("Send data...");
        console.log(file);
        window.ws.send("My data");

    //     console.log("Send file...");
    //     console.log(file);
    //     let reader = new FileReader();
    //
    //     reader.onerror = () => {
    //         console.error(reader.error);
    //     };
    //
    //     reader.onload = (e) => {
    //         console.log(e.target.result);
    //         const data = {
    //             "room": "first-room",
    //             "msg": "my message",
    //             "token": "123",
    //             "command": "insertFile",
    //             // "file": e.target.result
    //         }
    //
    //         console.log(data);
    //         // window.ws.send(data);
    //         window.ws.send(JSON.stringify(data));
    //
    //         // window.ws.close();
    //         // TODO: Implement an acknowledge answer from the server for every client message
    //     }
    //
    //     reader.readAsDataURL(file);
    //     // window.ws.onopen = () => reader.readAsDataURL(file);
    }
}

export default new SendFilesService();
