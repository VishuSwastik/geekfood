import photo from '../assets/photo.png'; // Import the image
import styles from './third_sec.module.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
      author: 'Gladys Lennon',
      title: 'Head of SEO',
      image: photo 
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
        author: 'Gladys Lennon',
        title: 'Head of SEO',
        image: photo 
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
        author: 'Gladys Lennon',
        title: 'Head of SEO',
        image: photo 
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
        author: 'Gladys Lennon',
        title: 'Head of SEO',
        image: photo 
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
        author: 'Gladys Lennon',
        title: 'Head of SEO',
        image: photo 
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
        author: 'Gladys Lennon',
        title: 'Head of SEO',
        image: photo 
      },
    
    
  ];

  return (
    <section className={styles.testimonialSection}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.testimonialCard}>
           <p>{testimonial.text}</p>
          <div className={styles.profile}>
         
            <img className={styles.imgProfile} src={testimonial.image} alt={testimonial.author} />
            <div>
              <h3>{testimonial.author}</h3>
              <p>{testimonial.title}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TestimonialSection;