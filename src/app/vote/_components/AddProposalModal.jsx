import Button from "@/components/buttons/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddProposalModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-primary text-sm font-semibold px-5 py-2 text-black rounded-full">
          Add Proposal
        </div>
      </DialogTrigger>
      <DialogContent className="bg-coal border-none">
        <DialogHeader>
          <DialogTitle className="text-4xl">New Proposal</DialogTitle>
          <div className="flex flex-col gap-5 py-5">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Title</span>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter title"
                className="bg-transparent border outline-none focus:outline-none focus:border-primary2 border-gray2 rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Description</span>
              <textarea
                type="text"
                name="desc"
                id="desc"
                placeholder="Enter description"
                className="bg-transparent h-[80px] border outline-none focus:outline-none focus:border-primary2 border-gray2 rounded-md px-3 py-2"
              ></textarea>
            </div>
            <Button
                className=" mt-5"
                title="Submit"
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
