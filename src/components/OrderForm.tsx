import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface OrderFormProps {
  productName: string;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderForm = ({ productName, isOpen, onClose }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          location: formData.location,
          product: productName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      const data = await response.json();

      if (data.success) {
        setOrderSuccess(true);
        toast.success("Your order has been completed successfully!");
        
        // Reset form after 2 seconds and close modal
        setTimeout(() => {
          setFormData({
            fullName: "",
            phone: "",
            location: "",
          });
          setOrderSuccess(false);
          onClose();
        }, 2000);
      } else {
        throw new Error(data.message || "Order submission failed");
      }
    } catch (error) {
      console.error("Order submission error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to submit order. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Order Now</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Modal Body */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {orderSuccess ? (
              <div className="py-8 text-center">
                <div className="mb-4 text-5xl">✓</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Order Submitted!</h3>
                <p className="text-muted-foreground">
                  Your order has been completed successfully. We will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                {/* Product Name (Read-only) */}
                <div>
                  <label htmlFor="productName" className="block text-sm font-medium text-foreground mb-2">
                    Product
                  </label>
                  <input
                    id="productName"
                    type="text"
                    value={productName}
                    disabled
                    placeholder="Product name"
                    title="Product name (read-only)"
                    aria-label="Product name"
                    className="w-full px-4 py-2 border border-input rounded-md bg-muted text-muted-foreground cursor-not-allowed"
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    title="Enter your full name"
                    aria-label="Full name"
                    aria-required="true"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      errors.fullName ? "border-red-500 focus:ring-red-500" : "border-input"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    title="Enter your phone number"
                    aria-label="Phone number"
                    aria-required="true"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      errors.phone ? "border-red-500 focus:ring-red-500" : "border-input"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Location / Address */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                    Location / Address *
                  </label>
                  <textarea
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your location or address"
                    title="Enter your location or address"
                    aria-label="Location or address"
                    aria-required="true"
                    rows={3}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
                      errors.location ? "border-red-500 focus:ring-red-500" : "border-input"
                    }`}
                  />
                  {errors.location && (
                    <p className="text-sm text-red-500 mt-1">{errors.location}</p>
                  )}
                </div>

                {/* Form Footer */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Order"}
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
