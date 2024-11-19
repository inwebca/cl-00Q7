import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import supabase from "../../supabaseClient"

dotenv.config();

const router: Router = express.Router();


//POST /expense/create - Create expense 
router.post("/create", async (req: Request, res: Response) => {
    try {
        const { group_id, user_id, amount, description } = req.body;
        const { error } = await supabase
            .from('expenses')
            .insert([{ group_id, user_id, amount, description }]);

        if (error) throw error;
        res.status(201).json("expense added");
    }
    catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }

})

//GET /expenses/:groupId - All expense from group
router.get("/groups/:groupId", async (req: Request, res: Response) => {
    try {
        const { groupId } = req.params;
        const { data, error } = await supabase
            .from('expenses')
            .select(`
                id,
                amount,
                description,
                groups (name)
              `)
            .eq('group_id', groupId);

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});


//GET /expenses/:userId - All expense from user
router.get("/users/:userId", async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { data, error } = await supabase
            .from('expenses')
            .select(`
                id,
                amount,
                description,
                users (name)
              `)
            .eq('user_id', userId);

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});



export default router;
