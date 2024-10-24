const FAQ = () => {
    const faqs = [
      { question: "What types of aquariums do you offer?", answer: "We specialize in marine tanks, planted tanks, and freshwater aquariums. We offer a wide range of sizes and styles to suit your space and preferences." },
      { question: "Do you provide maintenance services?", answer: "Yes, we offer comprehensive maintenance services to keep your aquarium healthy and beautiful. Our expert team can handle everything from water changes to equipment checks." },
      { question: "Can you help me set up a custom aquarium?", answer: "Absolutely! We love creating custom aquariums. Our design team will work with you to create a unique setup that fits your vision and space perfectly." },
      { question: "What kind of fish do you sell?", answer: "We offer a wide variety of freshwater and marine fish, including exotic species. All our fish are ethically sourced and quarantined to ensure they're healthy before sale." },
      { question: "Do you offer delivery and installation services?", answer: "Yes, we provide delivery and professional installation services for all our aquariums. Our team will ensure your new aquarium is set up correctly and running smoothly." },
      { question: "What kind of warranty do you offer?", answer: "We offer a 1-year warranty on all our aquariums and equipment. This covers any manufacturing defects or malfunctions under normal use conditions." },
    ]
  
    return (
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    )
  }
  
  export default FAQ