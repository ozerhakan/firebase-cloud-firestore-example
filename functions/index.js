const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const firebase = require('firebase-admin');
firebase.initializeApp();


const app = express();
app.use(cors({ origin: true }));

const productRef = firebase.firestore().collection('products');

app.post('/product', (req, res) => {
    const product = req.body;

    productRef.add(product)
        .then((result) => {
            res.status(200).send(`Product added: ${result.id}`);
        }).catch((error) => {
            res.status(500).send(error);
        })
});

app.get("/product/:id", (req, res) => {

    productRef.doc(req.params.id).get()
        .then(product => {
            if(!product.exists) {
                throw new Error('Product not found');
            }
            res.status(200).json(product.data())
        }).catch(error =>
            res.status(500).send(error));

});

app.put("/product/:id", (req, res) => {

     productRef.doc(req.params.id).update(req.body)
        .then(() => {
            res.status(200).send("Product successfully updated !")
        }).catch(error => res.status(500).send(error));
});

app.delete("/product/:id", (req, res) => {

    productRef.doc(req.params.id).delete()
        .then(()=>res.status(204).send("Product successfully deleted!"))
        .catch(error =>
            res.status(500).send(error));
});

exports.api= functions.https.onRequest(app);













app.get('/products', async (req, res) => {
    productRef.get().then((snapshot => {
        const products = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        res.status(200).send(products);
    })).catch((error) => {
        res.status(500).send(error);
    })
});
