import Navbar from "../component/navbar";

export default function Assignment() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-amber-950 mb-6 text-center">
          Detailed Notes on AI and Machine Learning Concepts
        </h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-amber-950 mb-2">
              1. Machine Learning (ML)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Machine Learning is a subset of Artificial Intelligence (AI) that
              enables computers to learn from data and improve their performance
              without explicit programming. It involves training models using
              various algorithms to recognize patterns, make predictions, or
              automate decision-making. ML is widely used in fields like
              healthcare (disease prediction), finance (fraud detection), and
              e-commerce (recommendation systems). The three main types of ML
              are supervised learning, unsupervised learning, and reinforcement
              learning.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-amber-950 mb-2">
              2. Artificial Intelligence (AI)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              AI is a broad field of computer science focused on creating
              machines that can perform tasks requiring human intelligence.
              These tasks include reasoning, problem-solving, decision-making,
              language understanding, and learning from experience. AI is
              classified into two types:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>Narrow AI (Weak AI):</strong> AI systems designed for
                specific tasks, such as virtual assistants (e.g., Siri, Alexa)
                or recommendation algorithms.
              </li>
              <li>
                <strong>General AI (Strong AI):</strong> A hypothetical AI that
                can perform any intellectual task a human can do, with reasoning
                and self-awareness.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-amber-950 mb-2">
              3. Supervised Learning (Supervised Model)
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Supervised learning is an ML approach where the model is trained
              on labeled data. Each input in the dataset has a corresponding
              correct output, allowing the algorithm to learn relationships
              between input features and outputs. The model is then tested on
              new data to evaluate its accuracy. Common applications include:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Image classification: Identifying objects in images.</li>
              <li>
                Spam detection: Filtering spam emails based on labeled examples.
              </li>
              <li>Speech recognition: Converting spoken words into text.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Algorithms used in supervised learning include Linear Regression,
              Decision Trees, Support Vector Machines (SVM), and Neural
              Networks.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-amber-950 mb-2">
              4. Unsupervised Learning
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Unlike supervised learning, unsupervised learning deals with
              unlabeled data. The model must find hidden patterns or structures
              within the data without predefined outputs. It is often used for:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Clustering: Grouping similar data points (e.g., customer
                segmentation in marketing).
              </li>
              <li>
                Anomaly detection: Identifying fraud or unusual patterns in
                transactions.
              </li>
              <li>
                Dimensionality reduction: Simplifying large datasets while
                preserving important features.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Popular algorithms include K-Means Clustering, Hierarchical
              Clustering, and Principal Component Analysis (PCA).
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-amber-950 mb-2">
              5. Deep Learning
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Deep learning is an advanced subset of ML that uses artificial
              neural networks (ANNs) with multiple layers (hence “deep”) to
              model complex data patterns. Inspired by the human brain, deep
              learning excels in handling large-scale data like images, speech,
              and text. Key applications include:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Computer vision: Facial recognition, medical imaging.</li>
              <li>
                Natural language processing (NLP): Chatbots, machine
                translation.
              </li>
              <li>Autonomous systems: Self-driving cars, robotics.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Deep learning frameworks such as TensorFlow and PyTorch are
              commonly used to develop these models.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
