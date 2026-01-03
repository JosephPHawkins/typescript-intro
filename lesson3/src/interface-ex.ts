interface takePhoto {
    cameraMode: string,
    filter: string , 
    burst: string 
}



interface Like {
    sendLike: string 
}

interface Story {
    createStory(): void
}

class Instagram implements takePhoto,  Like, Story {

    constructor (public cameraMode: string, 
        public filter: string, 
        public burst: string, 
        public stories: string, 
        public sendLike: string ) {

        }

        createStory(): void {
            console.log('story created')
        }


}

