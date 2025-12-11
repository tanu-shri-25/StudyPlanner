import studyPlan from '../models/StudyPlan.js';


export const createStudyPlan = async (req, res) => {
    const { planName, startDate, endDate, description, specialConstrains, aiSuggestions } = req.body;


    if (!planName || !startDate || !endDate || !description) {
        return res.status(400).json({ message: 'Please provide all required fields: planName, startDate, endDate and description.' });
    }


    try {
        const newStudyPlan = new studyPlan({
            planName,
            startDate,
            endDate,
            description,
            specialConstrains,
            aiSuggestions
        });
        const savedPlan = await newStudyPlan.save();
        return res.status(201).json({message: 'plan created successfully'}, savedPlan);


    } catch (error) {
        return res.status(500).json({ message: 'Error creating study plan', error: error.message });
    }
}

export const getStudyPlans = async (req, res) => {
    try{
        const plan = await studyPlan.find().sort({createdAt: -1});
        return res.status(200).json({message: "plan retrived successfully", plan});
    } catch {
        return res.status(500).json({ message: 'Error creating study plan', error: error.message });
    }
}
export const editStudyPlan = async (req, res) => {
    const { id } = req.params;
    const { planName, startDate, endDate, description, specialConstrains, aiSuggestions } = req.body;


    const ifexist = await studyPlan.findById(id);
    if(!ifexist){
        return res.status(404).json({ message: 'Study plan not found' });
    }


    try{
        const updatedPlan = await studyPlan.findByIdAndUpdate(id, {
            planName,
            startDate,
            endDate,
            description,
            specialConstrains,
            aiSuggestions
        }, { new: true });


        return res.status(200).json({message: "plan updated successfully", updatedPlan});
    } catch (error) {
        return res.status(500).json({ message: 'Error editing study plan', error: error.message });
    }
}
export const deleteStudyPlan = async (req, res) => {
    const { id } = req.params;


    const ifexist = await studyPlan.findById(id);
    if(!ifexist){
        return res.status(404).json({ message: 'Study plan not found' });
    }


    try{
        const deletedPlan = await studyPlan.findByIdAndDelete(id);
        return res.status(200).json({message: "plan deleted successfully", deletedPlan});
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting study plan', error: error.message });
    }
}

