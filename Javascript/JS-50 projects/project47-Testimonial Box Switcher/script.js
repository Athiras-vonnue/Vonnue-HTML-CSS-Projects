const testimonial_container = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const user_img = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const userRole = document.querySelector('.role')
console.log(user_img)

const testmonialData = [
    {
        name : "Sasha Ho",
        position:"Accountant",
        photo:"photo3.jpeg",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        name : "Veeti Seppanen",
        position:"Director",
        photo:"photo1.avif",
        text:"it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
    },
    {
        name : "John Doe",
        position:"CEO",
        photo:"photo2.jpeg",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        name : "Angelina",
        position:"Associate",
        photo:"photo4.jpeg",
        text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    }
]
//updateTestimonial()
let idx = 1;

function updateTestimonial(){
    const{name, photo, position,text} = testmonialData[idx];
    testimonial.innerHTML = text;
    user_img.src = photo;
    userName.innerHTML = name;
    userRole.innerHTML = position;

    idx++;

   // console.log(idx);

    if(idx > testmonialData.length -1){
        idx = 0
    }
}
//updteaTestimonial()

setInterval(updateTestimonial, 10000)