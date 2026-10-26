import { useState, useEffect } from "react";
const questions = [{
  q: "What is the time complexity of accessing an element in an array by index?",
  opts: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
  ans: 2,
  topic: "Arrays"
}, {
  q: "Which sorting algorithm has the best average-case time complexity?",
  opts: ["Bubble Sort — O(n²)", "Merge Sort — O(n log n)", "Selection Sort — O(n²)", "Insertion Sort — O(n²)"],
  ans: 1,
  topic: "Algorithms"
}, {
  q: "In Java, which keyword prevents a method from being overridden in a subclass?",
  opts: ["static", "private", "final", "abstract"],
  ans: 2,
  topic: "Java OOP"
}, {
  q: "What does SQL GROUP BY clause do?",
  opts: ["Filters rows based on a condition", "Groups rows with the same values", "Sorts result set", "Joins two tables"],
  ans: 1,
  topic: "DBMS"
}, {
  q: "What is the base case in a recursive function?",
  opts: ["The first call to the function", "The condition that stops recursion", "The return type", "The parameter list"],
  ans: 1,
  topic: "Recursion"
}, {
  q: "Which data structure uses FIFO (First In, First Out) order?",
  opts: ["Stack", "Tree", "Queue", "Graph"],
  ans: 2,
  topic: "DSA"
}, {
  q: "In Python, what does list comprehension [x**2 for x in range(5)] produce?",
  opts: ["[1, 4, 9, 16, 25]", "[0, 1, 4, 9, 16]", "[0, 2, 4, 8, 16]", "[1, 2, 3, 4, 5]"],
  ans: 1,
  topic: "Python"
}, {
  q: "What is a primary key in a relational database?",
  opts: ["A key that can have NULL values", "A foreign key reference", "A unique identifier for each row", "An index on a column"],
  ans: 2,
  topic: "DBMS"
}, {
  q: "What is the worst-case time complexity of Quick Sort?",
  opts: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
  ans: 2,
  topic: "Algorithms"
}, {
  q: "Which OOP principle allows a class to have multiple methods with the same name but different parameters?",
  opts: ["Inheritance", "Encapsulation", "Polymorphism (Method Overloading)", "Abstraction"],
  ans: 2,
  topic: "Java OOP"
}];
const passMark = 70;
export default function FinalEvaluation({
  onNav
}) {
  const [phase, setPhase] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [showConfirm, setShowConfirm] = useState(false);
  useEffect(() => {
    if (phase !== "quiz") return;
    const t = setInterval(() => setTimeLeft(p => Math.max(0, p - 1)), 1000);
    return () => clearInterval(t);
  }, [phase]);
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const pick = i => {
    setSelected(i);
    const next = [...answers];
    next[current] = i;
    setAnswers(next);
  };
  const goTo = i => {
    setCurrent(i);
    setSelected(answers[i]);
  };
  const submit = () => {
    setShowConfirm(false);
    setPhase("submitting");
    setTimeout(() => setPhase("result"), 2500);
  };
  const correct = answers.filter((a, i) => a === questions[i].ans).length;
  const score = Math.round(correct / questions.length * 100);
  const passed = score >= passMark;
  const topicBreakdown = Array.from(new Set(questions.map(q => q.topic))).map(topic => {
    const qs = questions.filter(q => q.topic === topic);
    const correct = qs.filter((q, _) => {
      const idx = questions.indexOf(q);
      return answers[idx] === q.ans;
    }).length;
    return {
      topic,
      score: Math.round(correct / qs.length * 100)
    };
  });
  if (phase === "intro") {
    return <div className="p-6 max-w-2xl mx-auto">
        <div className="card p-8 text-center slide-up">
          <div className="text-6xl mb-4">📝</div>
          <div className="ai-chip mx-auto mb-4">Final Step — Course Evaluation</div>
          <h2 className="text-2xl font-800 text-indigo-950 mb-3" style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 800
        }}>
            Final Evaluation
          </h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-md mx-auto">
            This is the final step to earn your certificate. Successfully passing this evaluation
            confirms your mastery of all course topics.
          </p>

          {/* Prerequisites checklist */}
          <div className="card p-5 mb-6 text-left">
            <div className="text-sm font-semibold text-slate-700 mb-3">Completion Requirements Met</div>
            <div className="space-y-2.5">
              {[{
              label: "All 12 topics completed",
              done: true
            }, {
              label: "6 Smart Engagement Quizzes passed",
              done: true
            }, {
              label: "Spaced revision sessions completed",
              done: true
            }, {
              label: "Required score ≥ 70% in core topics",
              done: true
            }, {
              label: "Final Evaluation — In Progress",
              done: false,
              current: true
            }].map(item => <div key={item.label} className={`flex items-center gap-3 ${item.current ? "text-indigo-700" : ""}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${item.done ? "bg-emerald-500 text-white" : item.current ? "bg-indigo-100 border-2 border-indigo-500" : "bg-slate-100 border-2 border-slate-300"}`}>
                    {item.done ? "✓" : item.current ? "→" : ""}
                  </div>
                  <span className={`text-sm ${item.done ? "text-slate-600" : item.current ? "font-semibold text-indigo-700" : "text-slate-400"}`}>
                    {item.label}
                  </span>
                </div>)}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[{
            label: "Questions",
            val: "10"
          }, {
            label: "Time Limit",
            val: "30 min"
          }, {
            label: "Pass Mark",
            val: `${passMark}%`
          }].map(s => <div key={s.label} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-2xl font-black gradient-text" style={{
              fontFamily: "'DM Sans',sans-serif"
            }}>{s.val}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>)}
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-800 mb-6">
            ⚠️ You must score <strong>{passMark}% or above</strong> to unlock your Certificate of Completion.
          </div>

          <button onClick={() => setPhase("quiz")} className="btn-primary w-full justify-center py-3 text-base">
            Begin Final Evaluation 🚀
          </button>
        </div>
      </div>;
  }
  if (phase === "submitting") {
    return <div className="min-h-screen flex items-center justify-center" style={{
      background: "linear-gradient(135deg,#F5F3FF,#EFF6FF)"
    }}>
        <div className="text-center">
          <div className="text-6xl mb-6 pulse-soft">🤖</div>
          <h2 className="text-2xl font-bold text-indigo-950 mb-2" style={{
          fontFamily: "'DM Sans',sans-serif"
        }}>Evaluating Your Performance…</h2>
          <p className="text-slate-500 text-sm">AI is calculating your final score and verifying completion requirements.</p>
        </div>
      </div>;
  }
  if (phase === "result") {
    return <div className="p-6 max-w-2xl mx-auto slide-up">
        {/* Result Hero */}
        <div className="card p-8 text-center mb-5" style={{
        background: passed ? "linear-gradient(135deg,#059669,#047857)" : "linear-gradient(135deg,#DC2626,#B91C1C)",
        color: "white"
      }}>
          <div className="text-6xl mb-4">{passed ? "🎉" : "😟"}</div>
          <div className="text-5xl font-black mb-2" style={{
          fontFamily: "'DM Sans',sans-serif"
        }}>{score}%</div>
          <div className="text-white/80 mb-3">{correct}/{questions.length} correct · {passed ? "PASSED" : "NOT PASSED"}</div>
          <div className="text-white/90 text-sm">
            {passed ? "Excellent! You've met all course requirements. Your certificate is ready." : `You need ${passMark - score}% more to pass. Review your weak topics and try again.`}
          </div>
        </div>

        {/* Topic breakdown */}
        <div className="card p-5 mb-5">
          <h3 className="font-700 text-slate-900 mb-4" style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 700
        }}>Topic-Wise Results</h3>
          <div className="space-y-3">
            {topicBreakdown.map(t => <div key={t.topic}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700 font-medium">{t.topic}</span>
                  <span className="font-semibold" style={{
                color: t.score >= 70 ? "#10B981" : "#EF4444"
              }}>{t.score}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{
                width: `${t.score}%`,
                background: t.score >= 70 ? "#10B981" : "#EF4444"
              }} />
                </div>
              </div>)}
          </div>
        </div>

        {passed ? <div className="space-y-3">
            <div className="card p-4" style={{
          borderLeft: "4px solid #10B981",
          background: "#ECFDF5"
        }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <div className="font-semibold text-emerald-800">Certificate Unlocked!</div>
                  <div className="text-sm text-emerald-700">Your Certificate of Completion is ready to view and download.</div>
                </div>
              </div>
            </div>
            <button onClick={() => onNav("course-complete")} className="btn-primary w-full justify-center py-3 text-base">
              🎉 View Course Completion & Certificate
            </button>
          </div> : <div className="flex gap-3">
            <button onClick={() => onNav("revision")} className="btn-secondary flex-1 justify-center">Review Weak Topics</button>
            <button onClick={() => {
          setPhase("intro");
          setAnswers(Array(questions.length).fill(null));
          setCurrent(0);
        }} className="btn-primary flex-1 justify-center">Retry Evaluation</button>
          </div>}
      </div>;
  }
  const q = questions[current];
  const answered = answers.filter(a => a !== null).length;
  return <div className="p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="card p-4 mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-400 mb-0.5">Final Evaluation · Java & DSA Course</div>
          <div className="font-bold text-slate-800" style={{
          fontFamily: "'DM Sans',sans-serif"
        }}>
            Question {current + 1} of {questions.length}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="badge bg-slate-100 text-slate-600">{q.topic}</span>
          <div className={`font-mono text-sm font-semibold px-3 py-1.5 rounded-lg ${timeLeft < 300 ? "bg-red-100 text-red-700" : "bg-indigo-100 text-indigo-700"}`}>
            ⏱ {mins}:{secs.toString().padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="progress-bar mb-1">
          <div className="progress-fill" style={{
          width: `${(current + 1) / questions.length * 100}%`
        }} />
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          <span>{answered} answered</span>
          <span>{questions.length - answered} remaining</span>
        </div>
      </div>

      {/* Question */}
      <div className="card p-6 mb-4 slide-up">
        <p className="text-base font-semibold text-slate-900 mb-6 leading-relaxed">{q.q}</p>
        <div className="space-y-3">
          {q.opts.map((opt, i) => <button key={i} onClick={() => pick(i)} className={`w-full text-left p-4 rounded-xl border-2 text-sm font-medium transition-all ${selected === i ? "border-indigo-500 bg-indigo-50 text-indigo-800" : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700"}`}>
              <span className="inline-flex w-6 h-6 rounded-full items-center justify-center text-xs mr-3 font-bold" style={{
            background: selected === i ? "#4F46E5" : "#E2E8F0",
            color: selected === i ? "white" : "#64748B"
          }}>
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>)}
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between">
        <button onClick={() => goTo(Math.max(0, current - 1))} disabled={current === 0} className="btn-outline disabled:opacity-40">← Prev</button>
        <div className="flex gap-1 flex-wrap justify-center max-w-xs">
          {questions.map((_, i) => <button key={i} onClick={() => goTo(i)} className={`w-7 h-7 rounded text-xs font-semibold transition-all ${i === current ? "bg-indigo-600 text-white" : answers[i] !== null ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
              {i + 1}
            </button>)}
        </div>
        {current < questions.length - 1 ? <button onClick={() => goTo(current + 1)} className="btn-primary">Next →</button> : <button onClick={() => setShowConfirm(true)} className="btn-primary" style={{
        background: "#059669"
      }}>Submit ✓</button>}
      </div>

      {/* Confirm Modal */}
      {showConfirm && <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="card p-6 max-w-sm w-full mx-4">
            <h3 className="font-bold text-slate-900 mb-2" style={{
          fontFamily: "'DM Sans',sans-serif"
        }}>Submit Final Evaluation?</h3>
            <p className="text-sm text-slate-500 mb-2">You've answered {answered} of {questions.length} questions.</p>
            {answered < questions.length && <p className="text-sm text-amber-600 mb-4">⚠️ {questions.length - answered} unanswered {questions.length - answered === 1 ? "question" : "questions"} will count as incorrect.</p>}
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)} className="btn-outline flex-1 justify-center">Review</button>
              <button onClick={submit} className="btn-primary flex-1 justify-center" style={{
            background: "#059669"
          }}>Submit</button>
            </div>
          </div>
        </div>}
    </div>;
}
