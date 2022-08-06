from flask import Flask, jsonify, request
from happytransformer import HappyTextClassification
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/", methods = ['GET', 'POST'])
@cross_origin()
def hate_scores():
    data = request.get_json()
    happy_tc = HappyTextClassification("BERT", "Hate-speech-CNERG/dehatebert-mono-english", 2)
    text = data['text']
    print(text)
    sentences = text.split(".")
    print(sentences)
    hate_sentences = {}
    for sentence in sentences:
        classify = happy_tc.classify_text(sentence)
        print(classify)
        if(classify.label == 'HATE'):
            hate_sentences.update({sentence: classify.score})
    print(hate_sentences, "<<<<<<<<<<<")
    return hate_sentences


if __name__ == "__main__":
    app.run()