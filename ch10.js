// The k-nearest neighbors (KNN) algorithm

// This algorithm is simple but useful! If you’re trying to classify something,
// The two basic things u could do with KNN is:
// 1. Classification = categorization into a group
// 2. Regression = predicting a response (like a number)
// When you’re working with KNN, it’s really important to pick the right
// features to compare against.
// Picking the right features means:
// • Features that directly correlate to the movies you’re trying to
// recommend
// • Features that don’t have a bias (for example, if you ask the users to
// only rate comedy movies, that doesn’t tell you whether they like
// action movies)
// There’s no one right answer when it comes to picking good features. You
// have to think about all the different things you need to consider.
// A good rule in KNN algorithm: if you have N users, you should look at sqrt(N) neighbors.
// KNN is a really useful algorithm, and it’s your introduction to the magical
// world of machine learning!

// --------------------------------------
// OCR

// OCR stands for optical character recognition. It means you can take a
// photo of a page of text, and your computer will automatically read the
// text for you. Google uses OCR to digitize books.
// OCR algorithms measure lines, points, and curves.
// When you upload a photo to Facebook, sometimes it’s smart enough to tag
// people in the photo automatically. That’s machine learning in action!
// The first step of OCR, where you go through images of numbers and
// extract features, is called training. Most machine-learning algorithms
// have a training step: before your computer can do the task, it must
// be trained.

// --------------------------------------
// Building a spam filter

// Spam filters use another simple algorithm called the Naive Bayes
// classifier. First, you train your Naive Bayes classifier on some data.
// Suppose you get an email with the subject “collect your million dollars
// now!” Is it spam? You can break this sentence into words. Then, for
// each word, see what the probability is for that word to show up in a
// spam email. For example, in this very simple model, the word million
// only appears in spam emails. Naive Bayes figures out the probability
// that something is likely to be spam. It has applications similar to KNN.

// For example, you could use Naive Bayes to categorize fruit: you have
// a fruit that’s big and red. What’s the probability that it’s a grapefruit?
// It’s another simple algorithm that’s fairly effective. We love those algorithms!

// --------------------------------------
// Recap

// I hope this gives you an idea of all the different things you can do with
// KNN and with machine learning! Machine learning is an interesting
// field that you can go pretty deep into if you decide to:
// • KNN is used for classification and regression and involves looking
// at the k-nearest neighbors.
// • Classification = categorization into a group.
// • Regression = predicting a response (like a number).
// • Feature extraction means converting an item (like a fruit or a user)
// into a list of numbers that can be compared.
// • Picking good features is an important part of a successful KNN
// algorithm.
