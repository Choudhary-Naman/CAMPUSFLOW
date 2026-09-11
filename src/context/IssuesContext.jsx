import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { INITIAL_ISSUES } from "../utils/mockData";
import { LOCAL_STORAGE_KEY, STATUS_FLOW } from "../utils/constants";

const IssuesContext = createContext(null);

export function IssuesProvider({ children }) {
  const [issues, setIssues] = useLocalStorage(LOCAL_STORAGE_KEY, INITIAL_ISSUES);

  // Adds a brand new issue reported through the form.
  function addIssue(issueData) {
    const newIssue = {
      id: crypto.randomUUID(),
      status: "Pending",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ...issueData,
    };
    setIssues((prev) => [newIssue, ...prev]);
    return newIssue;
  }

  // Moves an issue to the next (or a specific) status.
  function updateIssueStatus(id, newStatus) {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id
          ? { ...issue, status: newStatus, updatedAt: Date.now() }
          : issue
      )
    );
  }

  // Advances an issue to the next step in STATUS_FLOW, if there is one.
  function advanceStatus(id) {
    setIssues((prev) =>
      prev.map((issue) => {
        if (issue.id !== id) return issue;
        const currentIndex = STATUS_FLOW.indexOf(issue.status);
        const nextStatus = STATUS_FLOW[currentIndex + 1];
        if (!nextStatus) return issue; // already resolved
        return { ...issue, status: nextStatus, updatedAt: Date.now() };
      })
    );
  }

  function deleteIssue(id) {
    setIssues((prev) => prev.filter((issue) => issue.id !== id));
  }

  const value = {
    issues,
    addIssue,
    updateIssueStatus,
    advanceStatus,
    deleteIssue,
  };

  return (
    <IssuesContext.Provider value={value}>{children}</IssuesContext.Provider>
  );
}

// Custom hook so components just call useIssues() instead of
// importing useContext + IssuesContext everywhere.
export function useIssues() {
  const context = useContext(IssuesContext);
  if (!context) {
    throw new Error("useIssues must be used within an IssuesProvider");
  }
  return context;
}
