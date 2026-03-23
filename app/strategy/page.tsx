import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StrategyPage() {
  return (
    <main className="page-wrapper">
      <Header />
      <div style={{ paddingTop: "120px", minHeight: "80vh" }}>
        <div className="padding-global">
          <div className="inner-container">
            <h1 className="heading-h1" style={{ marginBottom: "48px" }}>Strategy</h1>
            <iframe
              src="https://hello.withmoxie.com/01/automation-warrior/ai-intro?inFrame=true"
              style={{
                width: "100%",
                minHeight: "800px",
                border: "none",
                borderRadius: "16px",
              }}
              title="Strategy Call Booking"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
