"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  FileText,
  Download,
  User,
  Building2,
  Filter,
  Layers,
  Monitor,
  ExternalLink,
  Sparkles,
  X,
  Hash,
  Globe
} from "lucide-react";
import { technicalSessions } from "@/utils/technicalSessionsData";

export default function TechnicalSessionPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDay, setSelectedDay] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");
  const [selectedTrack, setSelectedTrack] = useState("all");
  const [selectedSessionId, setSelectedSessionId] = useState("all");

  // Extract unique tracks for filter dropdown
  const allTracks = useMemo(() => {
    const trackSet = new Set();
    technicalSessions.forEach((s) => {
      if (s.sessionTrack) trackSet.add(s.sessionTrack);
      s.papers.forEach((p) => {
        if (p.track) trackSet.add(p.track);
      });
    });
    return Array.from(trackSet).sort();
  }, []);

  // Filter sessions and papers
  const filteredData = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return technicalSessions
      .map((session) => {
        // Day filter
        if (selectedDay !== "all" && session.dayNumber !== Number(selectedDay)) {
          return null;
        }

        // Session ID filter
        if (selectedSessionId !== "all" && session.sessionId !== selectedSessionId) {
          return null;
        }

        // Track filter on session level
        if (
          selectedTrack !== "all" &&
          session.sessionTrack !== selectedTrack &&
          !session.papers.some((p) => p.track === selectedTrack)
        ) {
          return null;
        }

        // Filter papers in this session
        const matchingPapers = session.papers.filter((paper) => {
          // Mode filter
          if (selectedMode !== "all" && paper.mode.toLowerCase() !== selectedMode.toLowerCase()) {
            return false;
          }

          // Track filter on paper level
          if (
            selectedTrack !== "all" &&
            session.sessionTrack !== selectedTrack &&
            paper.track !== selectedTrack
          ) {
            return false;
          }

          // Search query matching
          if (!q) return true;

          const matchId = String(paper.paperId).includes(q);
          const matchTitle = paper.title.toLowerCase().includes(q);
          const matchPresenter = paper.presenter.toLowerCase().includes(q);
          const matchAffiliation = paper.affiliation.toLowerCase().includes(q);
          const matchTrack = paper.track.toLowerCase().includes(q);
          const matchSession = session.sessionId.toLowerCase().includes(q);

          return matchId || matchTitle || matchPresenter || matchAffiliation || matchTrack || matchSession;
        });

        if (matchingPapers.length === 0) return null;

        return {
          ...session,
          matchingPapers,
        };
      })
      .filter(Boolean);
  }, [searchQuery, selectedDay, selectedMode, selectedTrack, selectedSessionId]);

  // Calculate statistics
  const stats = useMemo(() => {
    let totalPapers = 0;
    let offlineCount = 0;
    let onlineCount = 0;

    filteredData.forEach((s) => {
      s.matchingPapers.forEach((p) => {
        totalPapers++;
        if (p.mode === "Offline") offlineCount++;
        else if (p.mode === "Online") onlineCount++;
      });
    });

    return {
      sessionsCount: filteredData.length,
      totalPapers,
      offlineCount,
      onlineCount,
    };
  }, [filteredData]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedDay("all");
    setSelectedMode("all");
    setSelectedTrack("all");
    setSelectedSessionId("all");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedDay !== "all" ||
    selectedMode !== "all" ||
    selectedTrack !== "all" ||
    selectedSessionId !== "all";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header / Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>IEEE Conference Record #70914</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Technical Session{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#800000] via-[#BE2727] to-[#F96604]">
              Presentation Schedule
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 font-normal">
            2026 IEEE 4th International Conference on Communication, Security, and Artificial Intelligence (ICCSAI - 2026)
          </p>

          {/* PDF Download and View Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/Technical-Session-Author-Schedule-v1.pdf"
              download="Technical-Session-Author-Schedule-v1.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#BE2727] to-[#800000] text-white text-sm font-medium hover:opacity-95 shadow-sm transition duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF Schedule</span>
            </a>

            <a
              href="/Technical-Session-Author-Schedule-v1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-gray-800 text-sm font-medium border border-gray-300 hover:bg-gray-50 shadow-sm transition duration-200"
            >
              <ExternalLink className="w-4 h-4 text-gray-500" />
              <span>View PDF in Browser</span>
            </a>
          </div>
        </div>

        {/* Filter & Search Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-6 space-y-5">
          {/* Top Day Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-4">
            {[
              { id: "all", label: "All Days (49 Sessions)" },
              { id: "1", label: "Day 1 · Nov 28, 2026 (Saturday)" },
              { id: "2", label: "Day 2 · Nov 29, 2026 (Sunday)" },
              { id: "3", label: "Day 3 · Nov 30, 2026 (Monday)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDay(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ${
                  selectedDay === tab.id
                    ? "bg-red-700 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar & Dropdown Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Paper ID, Title, Presenter, or Affiliation..."
                className="w-full pl-10 pr-9 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mode Filter */}
            <div>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full py-2.5 px-3 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                <option value="all">All Modes (Offline & Online)</option>
                <option value="Offline">Offline Only</option>
                <option value="Online">Online Only</option>
              </select>
            </div>

            {/* Track Filter */}
            <div>
              <select
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value)}
                className="w-full py-2.5 px-3 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent truncate"
              >
                <option value="all">All Tracks</option>
                {allTracks.map((tr) => (
                  <option key={tr} value={tr}>
                    {tr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Stats & Active Filter Info */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100 text-xs sm:text-sm text-gray-600">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-medium text-gray-800">
                Found: <strong className="text-red-700">{stats.sessionsCount}</strong> Sessions /{" "}
                <strong className="text-red-700">{stats.totalPapers}</strong> Papers
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Offline: {stats.offlineCount}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Online: {stats.onlineCount}
              </span>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-red-700 hover:text-red-800 underline"
              >
                <X className="w-3.5 h-3.5" />
                Reset all filters
              </button>
            )}
          </div>
        </div>

        {/* Sessions Content */}
        {filteredData.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center space-y-4">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No Matching Sessions Found</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              We couldn’t find any presentations matching your current search or filter combination. Try clearing your filters or searching for different keywords.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-medium hover:bg-red-800 transition"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredData.map((session) => (
              <div
                key={session.sessionId}
                id={session.sessionId}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                {/* Session Header */}
                <div className="bg-gradient-to-r from-red-800 via-red-700 to-amber-700 text-white p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white font-mono font-bold text-sm">
                          <Hash className="w-3.5 h-3.5" />
                          {session.sessionId}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-amber-400/90 text-amber-950 font-semibold text-xs uppercase tracking-wider">
                          {session.dayLabel}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 text-xs">
                          {session.matchingPapers.length}{" "}
                          {session.matchingPapers.length === 1 ? "Paper" : "Papers"}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                        {session.sessionTrack}
                      </h2>
                    </div>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-red-50">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm">
                        <Calendar className="w-4 h-4 text-amber-300" />
                        <span>{session.date} ({session.dayOfWeek})</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm">
                        <Clock className="w-4 h-4 text-amber-300" />
                        <span>{session.slot}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm">
                        <MapPin className="w-4 h-4 text-amber-300" />
                        <span>Venue: {session.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Session Table for Large Screens */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/80 border-b border-gray-200 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        <th className="py-3.5 px-4 w-20 text-center">Paper ID</th>
                        <th className="py-3.5 px-4 min-w-[280px]">Paper Title</th>
                        <th className="py-3.5 px-4 min-w-[170px]">Presenter</th>
                        <th className="py-3.5 px-4 min-w-[200px]">Affiliation</th>
                        <th className="py-3.5 px-4 min-w-[180px]">Track</th>
                        <th className="py-3.5 px-4 w-28 text-center">Mode</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {session.matchingPapers.map((paper, idx) => {
                        const isOffline = paper.mode.toLowerCase() === "offline";
                        return (
                          <tr
                            key={paper.paperId}
                            className={`transition-colors duration-150 hover:bg-red-50/40 ${
                              idx % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                            }`}
                          >
                            {/* Paper ID */}
                            <td className="py-4 px-4 text-center align-top">
                              <span className="inline-flex items-center justify-center font-mono font-bold text-xs px-2.5 py-1 rounded bg-red-100 text-red-800 border border-red-200">
                                #{paper.paperId}
                              </span>
                            </td>

                            {/* Title */}
                            <td className="py-4 px-4 align-top font-medium text-gray-900 leading-snug">
                              {paper.title}
                            </td>

                            {/* Presenter */}
                            <td className="py-4 px-4 align-top text-gray-800">
                              <div className="flex items-start gap-1.5">
                                <User className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                <span className="font-medium text-gray-900">{paper.presenter}</span>
                              </div>
                            </td>

                            {/* Affiliation */}
                            <td className="py-4 px-4 align-top text-gray-600 text-xs leading-relaxed">
                              <div className="flex items-start gap-1.5">
                                <Building2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                                <span>{paper.affiliation}</span>
                              </div>
                            </td>

                            {/* Track */}
                            <td className="py-4 px-4 align-top text-xs text-gray-600">
                              <div className="flex items-start gap-1.5">
                                <Layers className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                                <span>{paper.track}</span>
                              </div>
                            </td>

                            {/* Mode */}
                            <td className="py-4 px-4 align-top text-center">
                              <span
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                                  isOffline
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                    : "bg-indigo-50 text-indigo-700 border-indigo-200"
                                }`}
                              >
                                {isOffline ? (
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                ) : (
                                  <Monitor className="w-3 h-3 text-indigo-500" />
                                )}
                                {paper.mode}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Session Card Footer */}
                <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>
                    Session ID: <strong className="text-gray-700">{session.sessionId}</strong>
                  </span>
                  <span>
                    Venue: <strong className="text-gray-700">{session.venue}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Note / Disclaimer Footer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-amber-900 text-xs sm:text-sm space-y-2">
          <p className="font-semibold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            Important Notice for Presenters & Participants:
          </p>
          <ul className="list-disc list-inside space-y-1 text-amber-800">
            <li>Authors presenting offline are requested to report to their designated session venue 15 minutes prior to the scheduled slot.</li>
            <li>Online presenters will receive their virtual presentation room links and credentials via registered email before the session.</li>
            <li>For any queries or updates regarding the technical sessions, please contact the ICCSAI 2026 Organizing Committee.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
