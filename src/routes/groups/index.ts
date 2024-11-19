import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import supabase from "../../supabaseClient"

dotenv.config();

const router: Router = express.Router();


//GET /groups/all - All groups
router.get("/all", async (req: Request, res: Response) => {
    try {
        const { data, error } = await supabase
            .from('groups')
            .select('*');

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

//GET /groups/:groupId - Group details
router.get("/:groupId", async (req: Request, res: Response) => {
    try {
        const { groupId } = req.params;
        const { data, error } = await supabase
            .from('groups')
            .select('*')
            .eq("id", groupId);

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

export default router;
