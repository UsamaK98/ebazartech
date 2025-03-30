
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { formatPrice } from "@/lib/utils";

interface OfferFormProps {
  productId: string;
  productTitle: string;
  askingPrice: number;
}

export function OfferForm({ productId, productTitle, askingPrice }: OfferFormProps) {
  const [offerAmount, setOfferAmount] = useState<number>(Math.floor(askingPrice * 0.9));
  const [message, setMessage] = useState<string>("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would be an API call
    toast({
      title: "Offer Sent!",
      description: `Your offer of ${formatPrice(offerAmount)} has been sent to the seller.`,
    });
    
    // Reset the form
    setMessage("");
    // Don't reset the offer amount
  };
  
  const handleOfferChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setOfferAmount(value);
    } else {
      setOfferAmount(0);
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">Make an Offer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make an Offer</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="product">Product</Label>
            <Input
              id="product"
              value={productTitle}
              disabled
              className="bg-muted"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="asking-price">Asking Price</Label>
              <span className="text-sm text-muted-foreground">
                {formatPrice(askingPrice)}
              </span>
            </div>
            <Input
              id="asking-price"
              value={formatPrice(askingPrice)}
              disabled
              className="bg-muted"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="offer-amount">Your Offer</Label>
            <Input
              id="offer-amount"
              type="number"
              step="0.01"
              min="0"
              value={offerAmount}
              onChange={handleOfferChange}
              className="bg-background"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="I'm interested in this item..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">
              Send Offer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
