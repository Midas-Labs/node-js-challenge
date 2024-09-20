import { AppDataSource } from "../data-source"
import { ImageMetadata } from "../entity/ImageMetadata"

export class ImageController {

    private imageRepository = AppDataSource.getRepository(ImageMetadata)

    async save(image_Url, user_AuthId) {

        let imgData = Object.assign(new ImageMetadata(), {
            image_Url,
            user_AuthId,

        })
        console.log('imgData')
        console.log(imgData)
        this.imageRepository.save(imgData)
        return true;
    }

    async getImagesByUserId(user_AuthId: string) {

    const images = await this.imageRepository.find({
        where: { user_AuthId },
        select: ['image_Url'] // Only select the imageUrl column
    });

    return images.map(image => image.image_Url);
}
}