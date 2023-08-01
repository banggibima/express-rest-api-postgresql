import { Request, Response } from 'express';
import pool from '../models/user.model';

const findMany = async (req: Request, res: Response) => {
  try {
    console.log(`GET /api/users/`);
    const users = await pool.query('SELECT * FROM users');
    res.status(200).json({
      code: 200,
      message: 'success',
      success: true,
      data: users.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

const findOne = async (req: Request, res: Response) => {
  try {
    console.log(`GET /api/users/${req.params.id}`);
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [
      req.params.id,
    ]);
    res.status(200).json({
      code: 200,
      message: 'success',
      success: true,
      data: user.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

const createOne = async (req: Request, res: Response) => {
  try {
    console.log(`POST /api/users/`);
    const user = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [req.body.name, req.body.email, req.body.password]
    );
    res.status(201).json({
      code: 201,
      message: 'success',
      success: true,
      data: user.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

const updateOne = async (req: Request, res: Response) => {
  try {
    console.log(`PUT /api/users/${req.params.id}`);
    const user = await pool.query(
      'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
      [req.body.name, req.body.email, req.body.password, req.params.id]
    );
    res.status(200).json({
      code: 200,
      message: 'success',
      success: true,
      data: user.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

const removeMany = async (req: Request, res: Response) => {
  try {
    console.log(`DELETE /api/users/`);
    const users = await pool.query('DELETE FROM users');
    res.status(200).json({
      code: 200,
      message: 'success',
      success: true,
      data: users.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

const removeOne = async (req: Request, res: Response) => {
  try {
    console.log(`DELETE /api/users/${req.params.id}`);
    const user = await pool.query('DELETE FROM users WHERE id = $1', [
      req.params.id,
    ]);
    res.status(200).json({
      code: 200,
      message: 'success',
      success: true,
      data: user.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

export { findMany, findOne, createOne, updateOne, removeMany, removeOne };
