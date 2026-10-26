import { useState } from "react";
const certData = {
  student: "Arjun Sharma",
  course: "Java Programming & Data Structures",
  date: "April 26, 2026",
  score: 86,
  level: "Advanced Proficiency",
  certId: "LEARNAI-2026-CSE-0042",
  institution: "AI-Powered Personalized Learning Platform",
  instructor: "Prof. Priya Nair",
  department: "Computer Science & Engineering"
};
function CertificateCard({
  scale = 1
}) {
  return <div style={{
    width: 700,
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    fontFamily: "'DM Sans', sans-serif",
    background: "white",
    border: "1px solid #E2E8F0",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
  }}>
      {/* Outer border frame */}
      <div style={{
      padding: 10,
      background: "linear-gradient(135deg, #1E1B4B, #4F46E5, #06B6D4)"
    }}>
        <div style={{
        background: "white",
        borderRadius: 6,
        padding: "36px 48px"
      }}>
          {/* Header */}
          <div style={{
          textAlign: "center",
          borderBottom: "2px solid #E2E8F0",
          paddingBottom: 24,
          marginBottom: 28
        }}>
            {/* Logo */}
            <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 16
          }}>
              <div style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "linear-gradient(135deg,#4F46E5,#06B6D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 700,
              fontSize: 14
            }}>AI</div>
              <span style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#1E1B4B",
              letterSpacing: 0.5
            }}>
                AI-Powered Personalized Learning Platform
              </span>
            </div>
            {/* Title */}
            <div style={{
            fontSize: 11,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#94A3B8",
            marginBottom: 6
          }}>
              Proudly Presents
            </div>
            <h1 style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#1E1B4B",
            margin: 0,
            letterSpacing: 1
          }}>
              Certificate of Completion
            </h1>
          </div>

          {/* Body */}
          <div style={{
          textAlign: "center",
          marginBottom: 28
        }}>
            <div style={{
            fontSize: 12,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#94A3B8",
            marginBottom: 10
          }}>
              This certificate is proudly presented to
            </div>
            <div style={{
            fontSize: 36,
            fontWeight: 800,
            color: "#4F46E5",
            borderBottom: "2px solid #4F46E5",
            display: "inline-block",
            paddingBottom: 4,
            marginBottom: 20,
            letterSpacing: 1
          }}>
              {certData.student}
            </div>
            <div style={{
            fontSize: 12,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#94A3B8",
            marginBottom: 10
          }}>
              for successfully completing
            </div>
            <div style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#1E1B4B",
            marginBottom: 8
          }}>
              {certData.course}
            </div>
            <div style={{
            fontSize: 13,
            color: "#64748B",
            marginBottom: 20,
            fontStyle: "italic"
          }}>
              with a final score of{" "}
              <strong style={{
              color: "#4F46E5"
            }}>{certData.score}%</strong>
              {" "}— {certData.level}
            </div>

            {/* Decorative divider */}
            <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifyContent: "center",
            marginBottom: 24
          }}>
              <div style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(90deg, transparent, #C7D2FE)"
            }} />
              <span style={{
              color: "#4F46E5",
              fontSize: 18
            }}>✦</span>
              <div style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(90deg, #C7D2FE, transparent)"
            }} />
            </div>

            {/* Date & ID */}
            <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginBottom: 24
          }}>
              <div style={{
              textAlign: "left",
              padding: "12px 16px",
              background: "#F8F9FF",
              borderRadius: 8
            }}>
                <div style={{
                fontSize: 10,
                color: "#94A3B8",
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 3
              }}>Completion Date</div>
                <div style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#1E1B4B"
              }}>{certData.date}</div>
              </div>
              <div style={{
              textAlign: "left",
              padding: "12px 16px",
              background: "#F8F9FF",
              borderRadius: 8
            }}>
                <div style={{
                fontSize: 10,
                color: "#94A3B8",
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 3
              }}>Certificate ID</div>
                <div style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#4F46E5",
                fontFamily: "monospace"
              }}>{certData.certId}</div>
              </div>
            </div>
          </div>

          {/* Signature Row */}
          <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          borderTop: "1px solid #E2E8F0",
          paddingTop: 20
        }}>
            <div style={{
            textAlign: "center"
          }}>
              <div style={{
              borderBottom: "1px solid #94A3B8",
              paddingBottom: 6,
              marginBottom: 6,
              fontStyle: "italic",
              color: "#4F46E5",
              fontSize: 15
            }}>
                {certData.instructor}
              </div>
              <div style={{
              fontSize: 10,
              color: "#94A3B8",
              textTransform: "uppercase",
              letterSpacing: 1
            }}>Course Instructor</div>
              <div style={{
              fontSize: 10,
              color: "#64748B"
            }}>{certData.department}</div>
            </div>
            <div style={{
            textAlign: "center"
          }}>
              <div style={{
              borderBottom: "1px solid #94A3B8",
              paddingBottom: 6,
              marginBottom: 6
            }}>
                <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6
              }}>
                  <div style={{
                  width: 22,
                  height: 22,
                  borderRadius: 4,
                  background: "linear-gradient(135deg,#4F46E5,#06B6D4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 10
                }}>AI</div>
                  <span style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#1E1B4B"
                }}>LearnAI Platform</span>
                </div>
              </div>
              <div style={{
              fontSize: 10,
              color: "#94A3B8",
              textTransform: "uppercase",
              letterSpacing: 1
            }}>Issuing Authority</div>
              <div style={{
              fontSize: 10,
              color: "#64748B"
            }}>Verified Digital Certificate</div>
            </div>
          </div>

          {/* Verification badge */}
          <div style={{
          textAlign: "center",
          marginTop: 16
        }}>
            <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 14px",
            borderRadius: 99,
            background: "#ECFDF5",
            border: "1px solid #6EE7B7"
          }}>
              <span style={{
              color: "#10B981",
              fontSize: 12
            }}>✓</span>
              <span style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#059669",
              letterSpacing: 0.5
            }}>
                VERIFIED DIGITAL CERTIFICATE · learnai.edu/verify/{certData.certId}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export default function CertificatePreview({
  onNav
}) {
  const [verifyId, setVerifyId] = useState("");
  const [verifyResult, setVerifyResult] = useState("none");
  const handleVerify = () => {
    setVerifyResult(verifyId.trim().toUpperCase() === certData.certId ? "valid" : "invalid");
  };
  return <div className="p-6">
      <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Certificate Preview — main area */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-800 text-indigo-950" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 800
            }}>Certificate Preview</h2>
              <p className="text-slate-500 text-sm">Your official Certificate of Completion</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
              <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">✓</span>
              <span className="text-xs font-semibold text-emerald-700">Certificate Verified</span>
            </div>
          </div>

          {/* Scrollable certificate wrapper */}
          <div className="card p-4 overflow-x-auto" style={{
          background: "#F8F9FF"
        }}>
            <div style={{
            minWidth: 700
          }}>
              <CertificateCard scale={1} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            <button className="btn-primary flex-1 justify-center py-2.5">
              📥 Download Certificate
            </button>
            <button className="btn-secondary flex-1 justify-center py-2.5">
              🔗 Share Certificate
            </button>
            <button onClick={() => onNav("certificates")} className="btn-outline flex-1 justify-center py-2.5">
              📜 My Certificates
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Certificate Details */}
          <div className="card p-5">
            <h3 className="font-700 text-slate-900 mb-4" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 700
          }}>Certificate Details</h3>
            <div className="space-y-3">
              {[{
              label: "Course Name",
              val: certData.course
            }, {
              label: "Student Name",
              val: certData.student
            }, {
              label: "Completion Date",
              val: certData.date
            }, {
              label: "Final Score",
              val: `${certData.score}%`
            }, {
              label: "Achievement Level",
              val: certData.level
            }, {
              label: "Department",
              val: certData.department
            }].map(d => <div key={d.label} className="border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                  <div className="text-xs text-slate-400 mb-0.5">{d.label}</div>
                  <div className="text-sm font-semibold text-slate-800">{d.val}</div>
                </div>)}
              <div className="border-b border-slate-100 pb-2">
                <div className="text-xs text-slate-400 mb-0.5">Certificate ID</div>
                <div className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2 py-1 rounded">{certData.certId}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Completion Status</div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-sm font-semibold text-emerald-700">Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Download */}
          <div className="card p-4">
            <h3 className="font-700 text-slate-900 mb-3" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 700
          }}>Download Options</h3>
            <div className="space-y-2">
              {[{
              label: "PDF Certificate",
              icon: "📄"
            }, {
              label: "PNG Image",
              icon: "🖼️"
            }, {
              label: "Share Link",
              icon: "🔗"
            }, {
              label: "LinkedIn Badge",
              icon: "💼"
            }].map(d => <button key={d.label} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-all text-left">
                  <span className="text-base">{d.icon}</span>
                  {d.label}
                </button>)}
            </div>
          </div>

          {/* Verify Certificate */}
          <div className="card p-4">
            <h3 className="font-700 text-slate-900 mb-3" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 700
          }}>Verify Certificate</h3>
            <p className="text-xs text-slate-500 mb-3">Enter a Certificate ID to verify authenticity.</p>
            <input type="text" placeholder="e.g. LEARNAI-2026-CSE-0042" value={verifyId} onChange={e => {
            setVerifyId(e.target.value);
            setVerifyResult("none");
          }} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs font-mono mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <button onClick={handleVerify} className="btn-primary w-full justify-center text-sm py-2">Verify</button>

            {verifyResult === "valid" && <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 slide-up">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">✓</span>
                  <span className="font-semibold text-emerald-800 text-sm">Certificate Verified</span>
                </div>
                <div className="text-xs text-emerald-700 space-y-1">
                  <div><span className="text-emerald-500 font-medium">Student:</span> {certData.student}</div>
                  <div><span className="text-emerald-500 font-medium">Course:</span> {certData.course}</div>
                  <div><span className="text-emerald-500 font-medium">Completed:</span> {certData.date}</div>
                  <div><span className="text-emerald-500 font-medium">Status:</span> <strong>Valid</strong></div>
                </div>
              </div>}
            {verifyResult === "invalid" && <div className="mt-3 p-3 rounded-xl bg-red-50 border border-red-200 slide-up">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span className="text-sm text-red-700">Certificate not found or invalid. Please check the ID and try again.</span>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
}
