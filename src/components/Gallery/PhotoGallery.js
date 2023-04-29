import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import img1 from '../../assets/images/photogallery/IMG_9584.JPG'
import thumb1 from '../../assets/images/photogallery/IMG_9584small.JPG'
import img2 from '../../assets/images/photogallery/IMG_8584.JPG'
import thumb2 from '../../assets/images/photogallery/IMG_8584small.JPG'
import img3 from '../../assets/images/photogallery/IMG_0282.JPG'
import thumb3 from '../../assets/images/photogallery/IMG_0282small.JPG'
import img4 from '../../assets/images/photogallery/IMG_9485.JPG'
import thumb4 from '../../assets/images/photogallery/IMG_9485small.JPG'
import img5 from '../../assets/images/photogallery/IMG_9203.JPG'
import thumb5 from '../../assets/images/photogallery/IMG_9203small.JPG'
import img6 from '../../assets/images/photogallery/IMG_1094.JPG'
import thumb6 from '../../assets/images/photogallery/IMG_1094small.JPG'
import img7 from '../../assets/images/photogallery/IMG_9538.JPG'
import thumb7 from '../../assets/images/photogallery/IMG_9538small.JPG'
import img8 from '../../assets/images/photogallery/IMG_5185.JPG'
import thumb8 from '../../assets/images/photogallery/IMG_5185small.JPG'
import img9 from '../../assets/images/photogallery/IMG_9600.JPG'
import thumb9 from '../../assets/images/photogallery/IMG_9600small.JPG'
import img10 from '../../assets/images/photogallery/IMG_1313.JPG'
import thumb10 from '../../assets/images/photogallery/IMG_1313small.JPG'
import img11 from '../../assets/images/photogallery/IMG_7870.JPG'
import thumb11 from '../../assets/images/photogallery/IMG_7870small.JPG'
import img12 from '../../assets/images/photogallery/IMG_0524.JPG'
import thumb12 from '../../assets/images/photogallery/IMG_0524small.JPG'
import img13 from '../../assets/images/photogallery/IMG_1027.JPG'
import thumb13 from '../../assets/images/photogallery/IMG_1027small.JPG'
import img14 from '../../assets/images/photogallery/IMG_1900.JPG'
import thumb14 from '../../assets/images/photogallery/IMG_1900small.JPG'
import img15 from '../../assets/images/photogallery/IMG_0344.JPG'
import thumb15 from '../../assets/images/photogallery/IMG_0344small.JPG'
import img16 from '../../assets/images/photogallery/IMG_0881.JPG'
import thumb16 from '../../assets/images/photogallery/IMG_0881small.JPG'
import img17 from '../../assets/images/photogallery/IMG_1176.JPG'
import thumb17 from '../../assets/images/photogallery/IMG_1176small.JPG'
import img18 from '../../assets/images/photogallery/IMG_5731.JPG'
import thumb18 from '../../assets/images/photogallery/IMG_5731small.JPG'
import img19 from '../../assets/images/photogallery/IMG_8213.JPG'
import thumb19 from '../../assets/images/photogallery/IMG_8213small.JPG'
import '../../static/css/components/photogallery.css'


function PhotoGallery() {

    const images = [
        {
            img: img1,
            thumb: thumb1,
            caption: "Mt Kinesava from the Chinle Trail in Zion National Park, Mar 16, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img2,
            thumb: thumb2,
            caption: "Lake Yamanaka from the summit of Mt. Fuji, Aug 6, 2019, Canon EOS Rebel T3i"
        },
        {
            img: img3,
            thumb: thumb3,
            caption: "Devil's Garden in Grand Staircase-Escalante National Monument, Mar 20, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img4,
            thumb: thumb4,
            caption: "Darwin Falls at Death Valley National Park, Feb 22, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img5,
            thumb: thumb5,
            caption: "Manzanar National Historic Site, Feb 21, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img6,
            thumb: thumb6,
            caption: "The Windows at Arches National Park, Mar 24, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img7,
            thumb: thumb7,
            caption: "On the Chinle Trail in Zion National Park, Mar 16, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img8,
            thumb: thumb8,
            caption: "Brooklyn Bridge, Jun 1, 2019, iPhone SE"
        },
        {
            img: img9,
            thumb: thumb9,
            caption: "From the Chinle Trail in Zion National Park, Mar 16, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img10,
            thumb: thumb10,
            caption: "Dark Angel at Arches National Park, Mar 24, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img11,
            thumb: thumb11,
            caption: "Lake Yamanaka from the summit of Mt. Fuji, Jun 27, 2019, Canon EOS Rebel T3i"
        },
        {
            img: img12,
            thumb: thumb12,
            caption: "Capitol Reef National Park, Mar 21, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img13,
            thumb: thumb13,
            caption: "The Windows at Arches National Park, Mar 24, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img14,
            thumb: thumb14,
            caption: "Night sky at Kachess Lake in Washington State, Jul 30, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img15,
            thumb: thumb15,
            caption: "Dry Fork Narrows in Grand Staircase-Escalante National Monument, Mar 20, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img16,
            thumb: thumb16,
            caption: "Grand View Point in Canyons National Park, Mar 23, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img17,
            thumb: thumb17,
            caption: "Delicate Arch at Arches National Park, Mar 24, 2020, Canon EOS Rebel T3i"
        },
        {
            img: img18,
            thumb: thumb18,
            caption: "Megane-bashi bridge on Usui pass in Gunma, Japan, Aug 12, 2019, iPhone SE"
        },
        {
            img: img19,
            thumb: thumb19,
            caption: "Sea of clouds from the summit of Mt Fuji, Jul 11, 2019, Canon EOS Rebel T3i"
        }

    ]
    return (
            <LightGallery>
                    {images.map((image) =>
                        <a href={image.img} data-sub-html={'<p>'+image.caption + '<p>'}>
                            <img src={image.thumb} />
                        </a>
                    )}
            </LightGallery>
    )
}

export default PhotoGallery