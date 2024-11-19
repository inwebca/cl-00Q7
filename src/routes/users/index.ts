import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import supabase from "../../supabaseClient"

dotenv.config();

const router: Router = express.Router();


//POST /users/create - Create user
router.post("/create", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const { data, error } = await supabase
      .from('users')
      .insert([{ name, email }]);

    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});


//GET /users/:userId - User details
router.get("/:userId", async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

//GET /users/all - All users
router.get("/all", async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
