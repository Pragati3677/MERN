import { useEffect, useState } from "react";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const COURSE_NAME =
  "AI-Powered Personalized Learning Platform – Java Learning Path";

export default function MyCertificates({ onNav }) {
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [progress, setProgress] = useState([]);
  const [finalAttempts, setFinalAttempts] = useState([]);
  const [comparisons, setComparisons] = useState([]);

  const [error, setError] = useState("");

  const [verifyInput, setVerifyInput] = useState("");
  const [verifyResult, setVerifyResult] = useState("none");

  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  const token = localStorage.getItem("token");

  // --------------------------------------------------
  // GET CURRENT USER
  // --------------------------------------------------
  const getUser = () => {
    try {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        return {};
      }

      return JSON.parse(storedUser);
    } catch {
      return {};
    }
  };

  const user = getUser();

  const studentName =
    user?.name ||
    user?.fullName ||
    "Student";

  // --------------------------------------------------
  // FETCH CERTIFICATION DATA
  // --------------------------------------------------
  useEffect(() => {
    fetchCertificationData();
  }, []);

  const fetchCertificationData = async () => {
    setLoading(true);
    setError("");

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const [
        topicsResponse,
        progressResponse,
        finalResponse,
        comparisonResponse,
      ] = await Promise.all([
        fetch(`${API_URL}/topics`, {
          headers,
        }),

        fetch(`${API_URL}/progress`, {
          headers,
        }),

        fetch(`${API_URL}/final-evaluation-attempts/my-attempts`, {
          headers,
        }),

        fetch(`${API_URL}/performance-comparisons/my-comparisons`, {
          headers,
        }),
      ]);

      if (!topicsResponse.ok) {
        throw new Error("Unable to load topics.");
      }

      if (!progressResponse.ok) {
        throw new Error("Unable to load learning progress.");
      }

      if (!finalResponse.ok) {
        throw new Error("Unable to load final evaluation status.");
      }

      if (!comparisonResponse.ok) {
        throw new Error(
          "Unable to load performance comparison."
        );
      }

      const topicsData = await topicsResponse.json();
      const progressData = await progressResponse.json();
      const finalData = await finalResponse.json();
      const comparisonData =
        await comparisonResponse.json();

      setTopics(
        Array.isArray(topicsData)
          ? topicsData
          : topicsData.topics || []
      );

      setProgress(
        Array.isArray(progressData)
          ? progressData
          : progressData.progress || []
      );

      setFinalAttempts(
        Array.isArray(finalData.attempts)
          ? finalData.attempts
          : []
      );

      setComparisons(
        Array.isArray(comparisonData.comparisons)
          ? comparisonData.comparisons
          : []
      );
    } catch (err) {
      console.error(
        "Certification data error:",
        err
      );

      setError(
        err.message ||
          "Unable to load certification information."
      );
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // COMPLETED TOPICS
  // --------------------------------------------------
  const totalTopics =
    topics.length > 0 ? topics.length : 18;

  const completedTopics = progress.filter(
    (item) =>
      item.status === "completed" ||
      Number(item.progressPercentage) >= 100
  );

  const completedTopicCount =
    completedTopics.length;

  const topicsCompleted =
    completedTopicCount >= totalTopics;

  const topicProgressPercentage =
    totalTopics > 0
      ? Math.round(
          (completedTopicCount / totalTopics) * 100
        )
      : 0;

  // --------------------------------------------------
  // FINAL EVALUATION
  // --------------------------------------------------
  const completedFinalAttempts =
    finalAttempts.filter(
      (attempt) => attempt.status === "completed"
    );

  const latestFinalEvaluation =
    completedFinalAttempts.length > 0
      ? completedFinalAttempts[0]
      : null;

  const finalEvaluationCompleted =
    completedFinalAttempts.length > 0;

  // --------------------------------------------------
  // PERFORMANCE COMPARISON
  // --------------------------------------------------
  const latestComparison =
    comparisons.length > 0
      ? comparisons[0]
      : null;

  const performanceComparisonCompleted =
    comparisons.length > 0;

  // --------------------------------------------------
  // CERTIFICATE ELIGIBILITY
  // --------------------------------------------------
  const certificateEligible =
    topicsCompleted &&
    finalEvaluationCompleted &&
    performanceComparisonCompleted;

  // --------------------------------------------------
  // COMPLETION DATE
  // --------------------------------------------------
  const completionDate =
    latestComparison?.createdAt ||
    latestFinalEvaluation?.completedAt ||
    null;

  const formattedCompletionDate =
    completionDate
      ? new Date(completionDate).toLocaleDateString(
          "en-IN",
          {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }
        )
      : null;

  // --------------------------------------------------
  // FINAL SCORE
  // --------------------------------------------------
  const finalScore =
    latestFinalEvaluation?.percentage ??
    latestComparison?.finalScore ??
    null;

  // --------------------------------------------------
  // CERTIFICATE ID
  // --------------------------------------------------
  // No certificate API exists yet, so we don't invent
  // a backend certificate ID.
  const certificateId = null;

  // --------------------------------------------------
  // VERIFY CERTIFICATE
  // --------------------------------------------------
  const handleVerify = () => {
    const input = verifyInput.trim();

    if (!input) {
      setVerifyResult("none");
      return;
    }

    /*
      Certificate verification cannot be connected to
      a backend certificate API yet because no certificate
      verification endpoint exists in the provided backend.
    */

    setVerifyResult("unavailable");
  };

  // --------------------------------------------------
  // STATUS COMPONENT
  // --------------------------------------------------
  const RequirementRow = ({
    completed,
    title,
    description,
  }) => (
    <div className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-white">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          completed
            ? "bg-emerald-100 text-emerald-600"
            : "bg-slate-100 text-slate-400"
        }`}
      >
        {completed ? "✓" : "○"}
      </div>

      <div className="flex-1">
        <div
          className={`text-sm font-semibold ${
            completed
              ? "text-emerald-700"
              : "text-slate-700"
          }`}
        >
          {title}
        </div>

        <div className="text-xs text-slate-500 mt-0.5">
          {description}
        </div>
      </div>

      <div
        className={`text-xs font-semibold ${
          completed
            ? "text-emerald-600"
            : "text-slate-400"
        }`}
      >
        {completed ? "Completed" : "Pending"}
      </div>
    </div>
  );

  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------
  if (loading) {
    return (
      <div className="p-6">
        <div className="card p-8 text-center">
          <div className="text-3xl mb-3">🎓</div>

          <div className="font-semibold text-slate-700">
            Loading certification status...
          </div>

          <div className="text-sm text-slate-400 mt-1">
            Checking your course progress and final evaluation.
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // MAIN UI
  // --------------------------------------------------
  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h2
          className="text-xl text-indigo-950"
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 800,
          }}
        >
          My Certificate
        </h2>

        <p className="text-slate-500 text-sm mt-0.5">
          Track your certification eligibility and
          course completion status.
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* COURSE CARD */}
      <div className="card overflow-hidden">

        {/* TOP BANNER */}
        <div
          className="p-6 text-white relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #1E1B4B, #4F46E5)",
          }}
        >
          <div className="relative z-10">
            <div className="text-4xl mb-3">
              🎓
            </div>

            <div className="text-xs uppercase tracking-widest text-indigo-200 mb-1">
              Course Certification
            </div>

            <h3 className="text-xl font-bold">
              {COURSE_NAME}
            </h3>

            <p className="text-sm text-indigo-100 mt-2">
              Student: {studentName}
            </p>
          </div>

          <div className="absolute -right-10 -bottom-14 text-[150px] opacity-10">
            🎓
          </div>
        </div>

        {/* COURSE SUMMARY */}
        <div className="p-5">

          <div className="grid md:grid-cols-4 gap-3">

            {/* TOPICS */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-400">
                Topics Completed
              </div>

              <div className="text-xl font-bold text-slate-800 mt-1">
                {completedTopicCount}/{totalTopics}
              </div>

              <div className="text-xs text-indigo-600 mt-1">
                {topicProgressPercentage}% complete
              </div>
            </div>

            {/* FINAL EVALUATION */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-400">
                Final Evaluation
              </div>

              <div className="text-xl font-bold text-slate-800 mt-1">
                {finalEvaluationCompleted
                  ? "Completed"
                  : "Pending"}
              </div>

              {finalScore !== null && (
                <div className="text-xs text-emerald-600 mt-1">
                  Score: {finalScore}%
                </div>
              )}
            </div>

            {/* COMPARISON */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-400">
                Performance Comparison
              </div>

              <div className="text-xl font-bold text-slate-800 mt-1">
                {performanceComparisonCompleted
                  ? "Completed"
                  : "Pending"}
              </div>

              {latestComparison && (
                <div className="text-xs text-indigo-600 mt-1">
                  Final: {latestComparison.finalScore}%
                </div>
              )}
            </div>

            {/* STATUS */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-400">
                Certificate Status
              </div>

              <div
                className={`text-xl font-bold mt-1 ${
                  certificateEligible
                    ? "text-emerald-600"
                    : "text-amber-600"
                }`}
              >
                {certificateEligible
                  ? "Eligible"
                  : "Pending"}
              </div>

              <div className="text-xs text-slate-500 mt-1">
                {certificateEligible
                  ? "All requirements completed"
                  : "Complete remaining requirements"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REQUIREMENTS */}
      <div className="card p-5">

        <div className="mb-4">
          <h3
            className="text-sm text-slate-900"
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 700,
            }}
          >
            Certificate Requirements
          </h3>

          <p className="text-xs text-slate-500 mt-1">
            Complete every requirement to become eligible
            for the course certificate.
          </p>
        </div>

        <div className="space-y-3">

          <RequirementRow
            completed={topicsCompleted}
            title={`Complete all ${totalTopics} Java topics`}
            description={`${completedTopicCount} of ${totalTopics} topics completed`}
          />

          <RequirementRow
            completed={finalEvaluationCompleted}
            title="Complete Final Evaluation"
            description={
              finalEvaluationCompleted
                ? `Final evaluation score: ${finalScore ?? 0}%`
                : "Final evaluation has not been completed"
            }
          />

          <RequirementRow
            completed={performanceComparisonCompleted}
            title="Complete Performance Comparison"
            description={
              performanceComparisonCompleted
                ? "Initial and final performance have been compared"
                : "Performance comparison is still pending"
            }
          />
        </div>
      </div>

      {/* CERTIFICATE AVAILABLE */}
      {certificateEligible && (
        <div className="card overflow-hidden border border-emerald-200">

          <div className="p-5 bg-emerald-50">

            <div className="flex items-start gap-3">

              <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl">
                ✓
              </div>

              <div>
                <h3 className="font-bold text-emerald-800">
                  Certificate Requirements Completed
                </h3>

                <p className="text-sm text-emerald-700 mt-1">
                  Congratulations! You have completed
                  all available certification requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5">

            <div className="grid md:grid-cols-3 gap-4 mb-5">

              <div>
                <div className="text-xs text-slate-400">
                  Student
                </div>

                <div className="text-sm font-semibold text-slate-800 mt-1">
                  {studentName}
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400">
                  Final Score
                </div>

                <div className="text-sm font-semibold text-emerald-600 mt-1">
                  {finalScore ?? 0}%
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400">
                  Completed
                </div>

                <div className="text-sm font-semibold text-slate-800 mt-1">
                  {formattedCompletionDate ||
                    "Recently completed"}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 mb-4">
              <div className="text-xs text-slate-400">
                Course
              </div>

              <div className="text-sm font-semibold text-slate-800 mt-1">
                {COURSE_NAME}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">

              <button
                onClick={() =>
                  setSelectedCertificate({
                    studentName,
                    finalScore,
                    completionDate:
                      formattedCompletionDate,
                  })
                }
                className="btn-primary text-xs py-2 px-5"
              >
                View Certificate
              </button>

              <button
                onClick={() => {
                  alert(
                    "Certificate download will be connected after the certificate generation API is added."
                  );
                }}
                className="btn-secondary text-xs py-2 px-5"
              >
                Download Certificate
              </button>
            </div>

            {!certificateId && (
              <p className="text-xs text-slate-400 mt-3">
                Certificate generation/download API is not
                currently available in the provided backend.
              </p>
            )}
          </div>
        </div>
      )}

      {/* NOT ELIGIBLE */}
      {!certificateEligible && (
        <div className="card p-5">

          <div className="flex items-start gap-3">

            <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl">
              🔒
            </div>

            <div className="flex-1">

              <h3 className="font-bold text-slate-800">
                Certificate Pending
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Complete the remaining requirements to
                unlock your certificate.
              </p>

              <div className="mt-4">

                {!topicsCompleted && (
                  <button
                    onClick={() => onNav("my-learning")}
                    className="btn-primary text-xs py-2 px-4"
                  >
                    Continue Learning →
                  </button>
                )}

                {topicsCompleted &&
                  !finalEvaluationCompleted && (
                    <button
                      onClick={() =>
                        onNav("final-evaluation")
                      }
                      className="btn-primary text-xs py-2 px-4"
                    >
                      Complete Final Evaluation →
                    </button>
                  )}

                {topicsCompleted &&
                  finalEvaluationCompleted &&
                  !performanceComparisonCompleted && (
                    <button
                      onClick={() =>
                        onNav("performance")
                      }
                      className="btn-primary text-xs py-2 px-4"
                    >
                      View Performance Analysis →
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* COMPLETION DATE / COMPARISON */}
      {latestComparison && (
        <div className="card p-5">

          <h3
            className="font-bold text-slate-900 mb-4"
            style={{
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Final Performance Summary
          </h3>

          <div className="grid md:grid-cols-4 gap-4">

            <div>
              <div className="text-xs text-slate-400">
                Initial Score
              </div>

              <div className="text-lg font-bold text-slate-700 mt-1">
                {latestComparison.initialScore}%
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400">
                Final Score
              </div>

              <div className="text-lg font-bold text-emerald-600 mt-1">
                {latestComparison.finalScore}%
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400">
                Score Difference
              </div>

              <div className="text-lg font-bold text-indigo-600 mt-1">
                {latestComparison.scoreDifference > 0
                  ? "+"
                  : ""}
                {latestComparison.scoreDifference}%
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400">
                Final Level
              </div>

              <div className="text-lg font-bold text-slate-800 mt-1 capitalize">
                {latestComparison.finalPerformanceLevel ||
                  "—"}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* CERTIFICATE VERIFICATION */}
      <div className="card p-5">

        <h3
          className="font-bold text-slate-900 mb-1"
          style={{
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          Verify a Certificate
        </h3>

        <p className="text-xs text-slate-500 mb-4">
          Enter a Certificate ID to verify a certificate.
        </p>

        <div className="flex gap-3 max-w-md">

          <input
            type="text"
            placeholder="Enter Certificate ID"
            value={verifyInput}
            onChange={(e) => {
              setVerifyInput(e.target.value);
              setVerifyResult("none");
            }}
            className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 font-mono"
          />

          <button
            onClick={handleVerify}
            className="btn-primary px-5"
          >
            Verify
          </button>
        </div>

        {verifyResult === "unavailable" && (
          <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 max-w-md">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-amber-600">
                ⚠
              </span>

              <span className="font-semibold text-amber-800 text-sm">
                Certificate verification is not available yet.
              </span>
            </div>

            <p className="text-xs text-amber-700">
              A certificate verification endpoint is not
              currently available in the backend.
            </p>
          </div>
        )}
      </div>

      {/* CERTIFICATE PREVIEW MODAL */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">

            <div
              className="p-8 text-center text-white"
              style={{
                background:
                  "linear-gradient(135deg, #1E1B4B, #4F46E5)",
              }}
            >
              <div className="text-5xl mb-3">
                🎓
              </div>

              <div className="text-xs uppercase tracking-[0.3em] text-indigo-200">
                Certificate of Completion
              </div>

              <h2 className="text-2xl font-bold mt-3">
                {COURSE_NAME}
              </h2>
            </div>

            <div className="p-8 text-center">

              <p className="text-sm text-slate-500">
                This certificate is presented to
              </p>

              <h2 className="text-2xl font-bold text-indigo-950 mt-2">
                {selectedCertificate.studentName}
              </h2>

              <p className="text-sm text-slate-500 mt-4">
                for successfully completing the learning
                requirements of the Java Learning Path.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">

                <div className="p-3 rounded-lg bg-slate-50">
                  <div className="text-xs text-slate-400">
                    Final Score
                  </div>

                  <div className="font-bold text-emerald-600 mt-1">
                    {selectedCertificate.finalScore ?? 0}%
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50">
                  <div className="text-xs text-slate-400">
                    Completion Date
                  </div>

                  <div className="font-semibold text-slate-700 mt-1">
                    {selectedCertificate.completionDate ||
                      "—"}
                  </div>
                </div>

              </div>

              <div className="mt-6">

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                  ✓ Course Requirements Completed
                </span>

              </div>

              <button
                onClick={() =>
                  setSelectedCertificate(null)
                }
                className="btn-secondary mt-6 px-6 py-2 text-sm"
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}