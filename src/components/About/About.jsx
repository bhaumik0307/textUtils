import React from 'react'

const About = () => {
  return (
    <div className="flex-grow flex flex-col items-start text-left px-36 py-10 w-full">
      <h1 className="text-4xl mb-5 w-full">Welcome to TextUtils</h1>
      <p className="text-lg mb-8">Welcome to My Text Utils, your one-stop solution for all
       your text processing needs! Whether you're a writer, developer, student, or just
       someone who frequently works with text, our website offers a suite of powerful tools
       to enhance your productivity and streamline your workflow.</p>
      <h2 className="text-2xl text-bold mb-5">Key Features</h2>
      <ul className="list-disc pl-5 space-y-2 mb-8">
        <li className="mb-4">
          <h3 className="text-lg text-bold">Text Transformation:</h3>
          <p className="text-base">Easily convert your text to uppercase, lowercase, title case, and 
          more with our simple and intuitive tools.</p>
        </li>
        <li className="mb-4">
          <h3 className="text-lg text-bold">Word and Character Count:</h3>
          <p className="text-base">Quickly count the number of words, characters, sentences, and 
          paragraphs in your text to meet specific requirements or improve readability.</p>
        </li>
        <li className="mb-4">
          <h3 className="text-lg text-bold">Text Cleaning:</h3>
          <p className="text-base">Remove unwanted spaces, line breaks, and special characters from your 
          text to ensure it's clean and ready for use in any context.</p>
        </li>
        <li className="mb-4">
          <h3 className="text-lg text-bold">Encoding and Decoding:</h3>
          <p className="text-base">Encode your text to base64, URL encode, and decode strings with ease.</p>
        </li>
        <li className="mb-4">
          <h3 className="text-lg text-bold">Find and Replace:</h3>
          <p className="text-base">Efficiently search for specific words or phrases and replace them across
           your text with our powerful find-and-replace tool.</p>
        </li>
      </ul>
      <h2 className="text-3xl mb-5">Get Started</h2>
      <p clasName="text-lg w-full">Ready to enhance your text processing experience? Visit My Text Utils and 
      start exploring our range of tools today. Whether you're working on a small 
      project or a large document, our utilities will help you get the job done 
      efficiently and effectively.</p>
    </div>
  )
}

export default About
