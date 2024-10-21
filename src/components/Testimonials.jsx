const Testimonials = () => {
    const testimonials = [
      { name: "Rahul Sharma", role: "Aquarium Enthusiast", content: "AquaReef has transformed my living room with a stunning marine tank. Their expertise and attention to detail are unmatched. Highly recommended!" },
      { name: "Priya Patel", role: "First-time Fish Owner", content: "As a beginner, I was nervous about starting an aquarium. The team at AquaReef guided me through every step, making it an enjoyable experience." },
      { name: "Dr. Arun Kumar", role: "Marine Biologist", content: "The quality of fish and equipment at AquaReef is exceptional. Their commitment to ethical sourcing and expert care is commendable." },
    ]
  
    return (
      <section className="bg-blue-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Don't just take our word for it, hear from our satisfied customers
            </p>
          </div>
  
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center">
                      <img className="h-12 w-12 rounded-full object-cover" src={`/customer-${index + 1}.jpg`} alt={testimonial.name} />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials