const express = require('express');
const mysql = require('mysql');
const app = express();

    // VULNERABILIDAD 1: SQL Injection
    app.get('/user', (req, res) => {
      const userId = req.query.id;
      // Vulnerable: concatenación directa
      const query = `SELECT * FROM users WHERE id = ${userId}`;
      db.query(query, (err, results) => {
        res.json(results);
      });
    });

    // VULNERABILIDAD 2: XSS
    app.get('/search', (req, res) => {
      const term = req.query.q;
      // Vulnerable: no sanitiza input
      res.send(`<h1>Resultados para: ${term}</h1>`);
    });

    // VULNERABILIDAD 3: Hardcoded credentials
    const dbConfig = {
      host: 'localhost',
      user: 'admin',
      password: 'SuperSecret123!',  // Hardcoded password
      database: 'rappi_db'
    };

    // VULNERABILIDAD 4: Missing input validation
    app.post('/transfer', (req, res) => {
      const { amount, toAccount } = req.body;
      // No valida que amount sea positivo
      processTransfer(amount, toAccount);
    });
