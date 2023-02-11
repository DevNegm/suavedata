import React, { useEffect } from "react";
import Faq from "../components/Faq";

export default function FAQs() {
  const data = [
    {
      title: "Why should my company use data science?",
      body: "Data science is a powerful tool that can help your company make better decisions. It can help you understand your customers better, predict their behavior, and make better decisions. Data science can help you understand your customers better, predict their behavior, and make better decisions. Using data science in your company can bring several benefits, including: 1. Improved decision making: Data science can help you turn data into insights, allowing you to make informed decisions based on evidence rather than intuition or guesswork. 2. Increased efficiency: Data science can automate and streamline processes, reducing manual effort and freeing up time for higher-value activities. 3. Increased profitability: Data science can help you optimize pricing, target marketing, and identify new revenue streams, resulting in increased profits. 4. Better customer experience: Data science can help you understand your customers&#39; needs and preferences, allowing you to tailor your offerings and improve the customer experience. 5. Competitive advantage: By harnessing the power of data, you can gain a competitive advantage over your competitors and stay ahead of the curve.",
    },
    {
      title: "Can small businesses benefit from data science?",
      body: "Yes, small businesses can benefit from data science. In fact, with the increasing availability of affordable data tools and cloud computing resources, small businesses have more opportunities than ever to leverage data to gain insights and make informed decisions. Some ways small businesses can benefit from data science include: 1. Customer segmentation: By analyzing customer data, small businesses can better understand their target market and segment their customers into groups with similar needs and behaviors. 2. Predictive maintenance: By using machine learning models to analyze equipment data, small businesses can predict when maintenance is needed, reducing downtime and improving efficiency. 3. Inventory optimization: By analyzing sales data, small businesses can optimize their inventory levels, reducing waste and increasing profitability. 4. Marketing optimization: By using data to understand what drives customer behavior, small businesses can make data-driven decisions about how to allocate their marketing budget and reach their target audience. Overall, data science can help small businesses make better use of their limited resources and gain a competitive advantage over larger competitors.",
    },
    {
      title: "Why choose a boutique data firm?",
      body: "The main benefits of using a firm like ours is personalized attention and thrifty practices that translate to lower costs compared to traditional firms with larger overhead costs while still delivering the same quality products, services and solutions.",
    },
    {
      title: "Why is suave an interesting word?",
      body: "Suave is an interesting word because it has multiple meanings and connotations. In general, suave means &quot;smooth, polished, and sophisticated.&quot; It is often used to describe an entity that is confident, and has a way of handling themselves and others with grace and ease. Suave is an interesting word because of its multi-faceted meaning and cultural significance, making it a versatile and noteworthy term.",
    },
    {
      title: "What are the benefits of a flexible business model?",
      body: "A flexible business model offers several benefits, including: 1. Adaptability: The ability to respond quickly to changes in the market, customer needs, and other external factors. 2. Increased competitiveness: Flexibility allows a business to better meet the demands of customers, making it more competitive in the market. 3. Improved decision-making: With a flexible business model, a company can try out new strategies, test new products or services, and make changes quickly if necessary. 4. Increased profitability: By being able to respond quickly to changes in the market, a flexible business is better positioned to increase its profits over time. 5. Reduced risk: Flexibility helps reduce the risk of failure by allowing a company to pivot its strategy as needed, rather than being locked into a single, inflexible approach.",
    },
    {
      title: "What kind of automation can be made?",
      body: "There are many different types of machine learning models that can be created, including: 1. Supervised Learning: In this type of learning, the model is trained on labeled data, and the goal is to predict the output based on the input features. Examples include linear regression, logistic regression, and decision trees. 2. Unsupervised Learning: In this type of learning, the model is trained on unlabeled data, and the goal is to discover patterns or relationships within the data. Examples include clustering and dimensionality reduction. 3. Semi-supervised Learning: In this type of learning, the model is trained on a mix of labeled and unlabeled data, with the goal of leveraging the information in the unlabeled data to improve the accuracy of the predictions.  4. Reinforcement Learning: In this type of learning, the model learns through trial and error, with the goal of maximizing a reward signal. Reinforcement learning is often used in control systems and games. 5. Deep Learning: In this type of learning, the model consists of multiple layers of artificial neural networks, and is often used for complex tasks such as image and speech recognition. These are just a few examples of the many types of machine learning models that can be created. The choice of model will depend on the specific problem you are trying to solve, the type and quality of your data, and your computational resources.",
    },
    {
      title: "What are the cost of building a machine learning model?",
      body: "The cost of building a machine learning model can vary widely depending on several factors, including: 1. Data collection and preparation: Collecting and preparing high-quality data can be time-consuming and expensive, especially if you need to purchase data from external sources. 2. Model complexity: More complex models, such as deep learning models with many layers, can be more expensive to train and require more computational resources. 3. Computational resources: The cost of computational resources, such as cloud computing, can vary widely depending on the size of the data and the complexity of the model. 4. Tools and software: There are many machine learning tools and software packages available, ranging from open-source solutions to commercial software with substantial licensing fees. 5. Expertise: Hiring a data scientist or machine learning engineer can also be a significant cost, especially if you require specialized expertise. Overall, the cost of building a machine learning model can range from a few thousand dollars for a simple model using open-source tools to hundreds of thousands of dollars for a complex, enterprise-level solution. It&#39;s important to carefully consider the costs and benefits of different options before making a decision.",
    },
    {
      title: "How long does it take to make a machine learning model?",
      body: "The time it takes to build a machine learning model can vary widely depending on several factors, including: 1. Problem complexity: Simple problems with well-defined objectives and limited data may take only a few hours to build a model, while more complex problems with large datasets and multiple objectives can take weeks or even months. 2. Data preparation: Cleaning and preparing data can be time-consuming, especially if the data is in a raw format or if there are many missing values. 3. Model complexity: More complex models, such as deep learning models with many layers, can take longer to train and may require more computational resources.  4. Expertise: The time it takes to build a model can also depend on the expertise of the person building it. An experienced data scientist may be able to build a model much faster than someone with less experience. 5. Computational resources: The time it takes to build a model can also depend on the computational resources available. Training complex models on large datasets can take many hours or even days on a single machine, but can be accelerated using parallel computing or cloud resources. Overall, the time it takes to build a machine learning model can range from a few hours for a simple model to several months for a complex model with large amounts of data. The specific time required will depend on the factors listed above and the specific problem being addressed.",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      <h2 className="fw-bold text-center py-5 m-0 text-light">
        Frequently Asked Questions
      </h2>
      <div className="container">
        <div className="d-flex flex-column gap-1">
          {data?.map((faq) => (
            <Faq faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
}
