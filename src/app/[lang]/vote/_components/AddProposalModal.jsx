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
import { Store } from "@/context/Store"; // Make sure to import the context from the correct path
import CryptoJS from "crypto-js"; // Ensure CryptoJS is installed and imported
import { Plus } from "lucide-react";
import { useState, useContext } from "react";

export default function AddProposalModal({ lang }) {
  const [proposal, setProposal] = useState({ title: "", summary: "" });
  const [isOpen, setIsOpen] = useState(false); // State to handle dialog open/close
  const { submitProposal, GetAllProposalByArray } = useContext(Store);

  let keys = process.env.NEXT_PUBLIC_ENCRYPT_SECRET_KEYS;
  // Encrypt function
  const encryptData = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      keys
    )?.toString();
    return ciphertext;
  };

  // Function to handle proposal submission
  const submitProposalData = async () => {
    const encryptedData = encryptData(proposal);
    console.log(encryptedData, "encryptedDataencryptedData");
    try {
      await submitProposal(encryptedData);
      GetAllProposalByArray();
      setIsOpen(false); // Close the dialog
    } catch (error) {
      setIsOpen(false); // Close the dialog even if there's an error
      console.log(error, "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-primary border-primary transition-all ease-in duration-300 border-4 hover:bg-white text-sm font-semibold p-1 h-fit mt-1 text-black rounded-full">
        <Plus size={24} />
      </DialogTrigger>
      <DialogContent className="bg-coal border-none">
        <DialogHeader>
          <DialogTitle className="text-4xl">
            {lang === "en"
              ? "New Proposal"
              : lang === "es"
                ? "Nueva propuesta"
                : lang === "ru"
                  ? "Новое предложение"
                  : "Nouvelle proposition"}
          </DialogTitle>
          <div className="flex flex-col gap-5 py-5">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold">
                {lang === "en"
                  ? "Title"
                  : lang === "es"
                    ? "Título"
                    : lang === "ru"
                      ? "Заголовок"
                      : "Titre"}
              </span>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) =>
                  setProposal((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Enter title"
                className="bg-transparent border outline-none focus:outline-none focus:border-primary2 border-gray2 rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold">
                {lang === "en"
                  ? "Description"
                  : lang === "es"
                    ? "Descripción"
                    : lang === "ru"
                      ? "Описание"
                      : "La description"}
              </span>
              <textarea
                type="text"
                name="desc"
                id="desc"
                onChange={(e) =>
                  setProposal((prev) => ({ ...prev, summry: e.target.value }))
                }
                placeholder="Enter description"
                className="bg-transparent h-[80px] border outline-none focus:outline-none focus:border-primary2 border-gray2 rounded-md px-3 py-2"
              ></textarea>
            </div>
            <Button
              className=" mt-5"
              title={
                lang === "en"
                  ? "Submit"
                  : lang === "es"
                    ? "Enviar"
                    : lang === "ru"
                      ? "Отправить"
                      : "Soumettre"
              }
              onClick={() => submitProposalData()}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

// import React, { useState, useContext } from "react";
// import Button from "@/components/buttons/Button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// export default function AddProposalModal() {

//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger>
//         <div className="bg-primary text-sm font-semibold px-5 py-2 text-black rounded-full">
//           Add Proposal
//         </div>
//       </DialogTrigger>
//       <DialogContent className="bg-coal border-none">
//         <DialogHeader>
//           <DialogTitle className="text-4xl">New Proposal</DialogTitle>
//           <div className="flex flex-col gap-5 py-5">
//             <div className="flex flex-col gap-2">
//               <span className="text-sm font-semibold">Title</span>
//               <input
//                 type="text"
//                 name="title"
//                 value={proposal.title}
//                 onChange={(e) =>
//                   setProposal((prev) => ({ ...prev, title: e.target.value }))
//                 }
//                 placeholder="Enter title"
//                 className="bg-transparent border outline-none focus:outline-none focus:border-primary2 border-gray2 rounded-md px-3 py-2"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <span className="text-sm font-semibold">Description</span>
//               <textarea
//                 type="text"
//                 name="desc"
//                 id="desc"
//                 onChange={(e) =>
//                   setProposal((prev) => ({ ...prev, summry: e.target.value }))
//                 }
//                 placeholder="Enter description"
//                 className="bg-transparent h-[80px] border outline-none focus:outline-none focus:border-primary2 border-gray2 rounded-md px-3 py-2"
//               ></textarea>
//               <textarea
//                 type="text"
//                 name="desc"
//                 // value={proposal.summary}
//                 onChange={(e) =>
//                   setProposal((prev) => ({ ...prev, summry: e.target.value }))
//                 }
//                 placeholder="Enter description"
//                 className="bg-transparent h-[80px] border outline-none focus:outline-none focus:border-primary2 border-gray2 rounded-md px-3 py-2"
//               ></textarea>
//             </div>
//             <Button
//               className="mt-5"
//               title="Submit"
//               onClick={submitProposalData} // Trigger the submit function
//             />
//           </div>
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   );
// }
