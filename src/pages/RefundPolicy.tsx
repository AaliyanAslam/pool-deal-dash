import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import refundImage from "@/assets/refundImg.jpg";

const RefundPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="container mx-auto px-6 py-12">
      {/* Top small header with back button */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 p-2 rounded-lg bg-card/50 border border-primary/10 hover:bg-primary/10 transition"
        >
          <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          <span className="text-primary-foreground">Back</span>
        </button>
        <h1 className="text-3xl md:text-4xl font-black gradient-text">
          Refund Policy
        </h1>
      </div>

      {/* Two-column layout: left = text, right = image */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Policy Text */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-2xl shadow-lg border border-primary/10 glass-effect">
            <h2 className="text-xl font-extrabold mb-3 text-primary">
              REFUND POLICY - NO OTHER PROVIDERS GIVE YOU THIS!
            </h2>

            <p className="mb-3 font-semibold text-lg">
              WE STAND BY OUR SERVICE - OR YOU GET YOUR MONEY BACK!
            </p>

            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                If item (coins, cue, tools, etc.) is{" "}
                <span className="font-semibold text-foreground">
                  not delivered or activated within promised time
                </span>
                , you get a full refund.
              </li>
              <li>
                If access is denied or tool doesn't work as described, we'll
                either fix it fast or{" "}
                <span className="font-semibold text-foreground">
                  refund instantly
                </span>
                .
              </li>
              <li>No false promises. No fake tools. No risks.</li>
            </ul>

            <div className="mt-4 p-4 rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
              <h3 className="font-bold mb-2">TERMS APPLY:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>
                  Refunds valid only if issues are reported within{" "}
                  <span className="font-semibold">1 hour</span> of activation
                  or purchase.
                </li>
                <li>Screenshots or short video proofs may be required.</li>
                <li>
                  No refunds for misuse or sharing credentials with others.
                </li>
              </ul>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              DM us with full trust - we're one of the only providers offering
              this level of protection!
            </p>

            <p className="mt-4 text-sm text-muted-foreground font-semibold">
              8BALL TOOLS WHOLESALE PK
            </p>
          </div>

          {/* Contact / How to claim */}
          <div className="bg-card p-5 rounded-xl border border-primary/10">
            <h4 className="font-semibold mb-2">How to Request Refund</h4>
            <p className="text-muted-foreground mb-2">
              DM our support with order details, timestamp and proof
              (screenshot / short video). We'll respond immediately.
            </p>
            <p className="text-sm text-muted-foreground">
              Note: Refunds processed after verification. Keep evidence ready
              for faster resolution.
            </p>
          </div>

          <p className="text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex items-center justify-center">
          <img
            src={refundImage}
            alt="Refund visual"
            className="w-full max-w-md rounded-lg drop-shadow-2xl object-contain"
          />
        </div>
      </section>
    </main>
  );
};

export default RefundPolicy;
