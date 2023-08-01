import { Request, Response } from 'express';

const find = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      code: 200,
      message: 'this service is running properly',
      success: true,
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      message: err,
      success: false,
      data: null,
    });
  }
};

export { find };
