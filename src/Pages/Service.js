import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import slugify from "react-slugify";
import img from "../Assets/clint-patterson-dYEuFB8KQJk-unsplash.jpg";
import { BsBoxArrowLeft } from 'react-icons/bs';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function Service({ item }) {
  const data = [
    {
      title: "Predictive Analytics",
      body: "Predictive analytics is the use of statistical algorithms, machine learning techniques, and data mining to analyze current and historical data to make predictions about future events. The goal of predictive analytics is to identify patterns in data and use those patterns to inform decision-making processes. This can be applied in various fields, including business, healthcare, and finance, to anticipate future trends and outcomes based on historical data and other factors.",
    },
    {
      title: "Business Intelligence",
      body: "Use data, statistical algorithms and machine learning techniques to identify and understand the performance of a business, with the goal of improving business performance. It includes analyzing data from various sources to generate insights that inform decision-making and help businesses make better decisions and optimize their operations. Business analytics can encompass a wide range of activities, from customer analysis and market research to operational efficiency and financial forecasting.",
    },
    {
      title: "Forecasting",
      body: "A decision-making tool used by many businesses to help in budgeting, planning, and estimating future growth. In the simplest terms, forecasting is the attempt to predict future outcomes based on past events and management insight.",
    },
    {
      title: "Sentiment Modeling",
      body: "Also known as sentiment analysis, is the use of natural language processing, text analysis, and computational linguistics to identify and extract subjective information from text data. The goal of sentiment modeling is to determine the sentiment expressed in a piece of text, such as a customer review, social media post, or news article, as positive, negative, or neutral. Sentiment models are trained on large datasets of annotated text to learn the relationships between words, phrases, and sentiment. The resulting models can then be used to automatically classify the sentiment expressed in new, unseen text data. Sentiment modeling is used in a variety of applications, such as marketing research, customer experience management, and public opinion analysis.",
    },
    {
      title: "Data Mining",
      body: "analyzing dense volumes of data to find patterns, discover trends, and gain insight into how that data can be used. Data miners can then use those findings to make decisions or predict an outcome.",
    },
    {
      title: "Pattern Recognition",
      body: "Method that uses machine learning algorithms to automatically recognize patterns and regularities in data. This data can be anything from text and images to sounds or other definable qualities. Pattern recognition systems can recognize familiar patterns quickly and accurately.",
    },
    {
      title: "Data Generation",
      body: "Data generation is the process of creating or synthesizing new data for various purposes, such as testing, training machine learning models, or simulating real-world scenarios. This can be achieved through a variety of methods, including: Synthetic data creation: This involves generating completely artificial data that mimics real- world data, but with randomized or otherwise fictional values. Sampling from existing data: This involves taking a sample of real-world data and using it to generate new data by making random modifications, such as adding noise or combining data points. Data augmentation: This involves generating new data by transforming existing data, such as rotating an image or adding noise to an audio signal. The generated data can then be used for a variety of purposes, such as testing machine learning models, improving data privacy, or providing additional training data for models.",
    },
    {
      title: "Data Procurement",
      body: "Examples might include raw materials, software, services, or products that directly support the production of the products your company sells.",
    },
    {
      title: "Big Data",
      body: "Big data is the set of technologies created to store, analyse and manage this bulk data, a macro-tool created to identify patterns in the chaos of this explosion in information in order to design smart solutions. Today it is used in areas as diverse as medicine, agriculture, gambling and environmental protection.",
    },
    {
      title: "Data Visualization",
      body: "Data virtualization is a logical data layer that integrates all enterprise data siloed across the disparate systems, manages the unified data for centralized security and governance, and delivers it to business users in real time.",
    },
    {
      title: "Dashboard Creation",
      body: "A tool many businesses use to track, analyze, and display data—usually to gain insight into the overall well being of an organization, department, or specific process.",
    },
    {
      title: "Data Cleaning and formatting",
      body: "fixing or removing incorrect, corrupted, incorrectly formatted, duplicate, or incomplete data within a dataset.",
    },
    {
      title: "Text Analysis",
      body: "Text analysis is the process of examining and understanding the meaning, structure, and context of text data. It involves the use of various techniques, such as natural language processing (NLP), computational linguistics, and text mining, to extract insights and information from text data. Text analysis can be used for a wide range of purposes, including sentiment analysis, topic modeling, content classification, and information extraction. The goal of text analysis is to help organizations make data-driven decisions by uncovering patterns and trends in text data that would otherwise be difficult to detect through manual methods. It is widely used in fields such as marketing, customer experience management, and social media analysis.",
    },
    {
      title: "Strategy:",
      body: "Review all the decisions taken, and actions undertaken by a business for achieving the larger vision. Knowing what business strategy is and how to execute it properly can help businesses become market leaders in their domain Business model creation, prescriptive deliverable (provide a recommendation on the steps a business should take to resolve an issue)",
    },
  ];

  const [searching, setsearching] = useState(null);

  const { title } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setsearching(
        data.find((item) => slugify(item?.title.toLowerCase()) == title)
      );
    }, 500);
  }, [searching]);


  return (
    <div className="container py-5" style={{minHeight:"80vh"}}>
      {searching == null ? (
       <>
        <SkeletonTheme baseColor="#313131" highlightColor="#444">
  <Skeleton height={300} className="mt-5" />
  <Skeleton className="my-3" />
  <Skeleton height={10} count={7} />
  </SkeletonTheme>
       </>
      ) : (
        <>
        <Link to="/services" style={{width:"fit-content"}} className="text-decoration-none text-white fs-5 mb-5 d-block"><BsBoxArrowLeft/> Back</Link>
        <img className="w-100" style={{maxHeight:"300px",objectFit:"cover"}} src={img} alt={searching?.title} />
          <h2 className="fw-bold fs-2 my-3 text-white">{searching?.title}</h2>
          <p className="m-0 text-light">{searching?.body}</p>
        </>
      )}
    </div>
  );
}
