import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import {
  educations,
  experiences,
  personalInfo,
  projects,
  skillCategories,
} from '@/data';

// PDF base fonts: use Helvetica (Arial-like) and Times-Roman (Times-like)
const styles = StyleSheet.create({
  page: {
    paddingTop: 54,
    paddingBottom: 54,
    paddingHorizontal: 54,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 12,
  },
  name: {
    fontFamily: 'Times-Roman',
    fontSize: 18,
    fontWeight: 700 as any,
  },
  textRow: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Times-Roman',
    fontSize: 14,
    fontWeight: 700 as any,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderBottomStyle: 'solid',
    marginBottom: 6,
  },
  itemTitle: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontWeight: 700 as any,
  },
  itemSub: {
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  muted: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#444444',
  },
  italic: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontStyle: 'italic',
  },
  ul: {
    marginTop: 2,
    paddingLeft: 10,
  },
  li: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    marginVertical: 1,
  },
});

export function CVDocument() {
  const monthOrder: Record<string, number> = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  const formatDateRange = (
    fromMonth: string,
    fromYear: number,
    toMonth?: string,
    toYear?: number,
    current: boolean = false,
  ) => {
    if (current) return `${fromMonth} ${fromYear} - Present`;
    if (toMonth && toYear)
      return `${fromMonth} ${fromYear} - ${toMonth} ${toYear}`;
    return `${fromMonth} ${fromYear}`;
  };

  const formatEducationDate = (startYear: number, endYear: number) => {
    return `${startYear} - ${endYear}`;
  };

  // Sort experiences reverse-chronological: current first, then by end -> start
  const sortedExperiences = [...experiences].sort((a, b) => {
    if (a.current && !b.current) return -1;
    if (!a.current && b.current) return 1;

    const aEndYear = a.toYear ?? a.fromYear;
    const bEndYear = b.toYear ?? b.fromYear;
    if (aEndYear !== bEndYear) return bEndYear - aEndYear;

    const aEndMonth = a.toMonth
      ? monthOrder[a.toMonth]
      : monthOrder[a.fromMonth];
    const bEndMonth = b.toMonth
      ? monthOrder[b.toMonth]
      : monthOrder[b.fromMonth];
    return (bEndMonth ?? 0) - (aEndMonth ?? 0);
  });

  // Sort educations reverse-chronological by end year then start year
  const sortedEducations = [...educations].sort((a, b) => {
    if (a.endYear !== b.endYear) return b.endYear - a.endYear;
    return b.startYear - a.startYear;
  });

  return (
    <Document
      title={`${personalInfo.name} - CV`}
      author={personalInfo.name}
      creator={personalInfo.name}
      subject='Curriculum Vitae'
      keywords='CV, Resume, Sueksit Vachirakumthorn'
      language='en'
    >
      <Page size='A4' style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.textRow}>
            {personalInfo.email} | {personalInfo.phone}
          </Text>
          <Text style={styles.textRow}>
            LinkedIn: {personalInfo.linkedin.replace('https://', '')} | GitHub:{' '}
            {personalInfo.github.replace('https://', '')} | Portfolio:{' '}
            {personalInfo.website.replace('https://', '')}
          </Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
          {skillCategories.map((c, idx) => (
            <Text key={idx} style={styles.itemSub}>
              <Text style={styles.itemTitle}>{c.title}: </Text>
              {c.skills.map((s) => s.name).join(', ')}
            </Text>
          ))}
        </View>

        {/* Education (reverse-chronological) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {sortedEducations.slice(0, 2).map((e, idx) => (
            <View key={idx} style={{ marginBottom: 4 }}>
              <Text style={styles.itemTitle}>
                {e.degree} in {e.fieldOfStudy}
              </Text>
              <Text style={styles.itemSub}>{e.institution}</Text>
              <Text style={styles.itemSub}>
                {formatEducationDate(e.startYear, e.endYear)}
                {e.gpa ? ` • GPA: ${e.gpa}/4.0` : ''}
              </Text>
            </View>
          ))}
        </View>

        {/* Professional Experience (reverse-chronological) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
          {sortedExperiences.map((exp, idx) => (
            <View key={idx} wrap={false} style={{ marginBottom: 6 }}>
              <Text style={styles.itemTitle}>{exp.title}</Text>
              <Text style={styles.itemSub}>
                {exp.company} • {exp.city}, {exp.country}
              </Text>
              <Text style={styles.muted}>
                {formatDateRange(
                  exp.fromMonth,
                  exp.fromYear,
                  exp.toMonth,
                  exp.toYear,
                  exp.current,
                )}{' '}
                ({exp.type})
              </Text>
              <Text style={styles.italic}>{exp.description}</Text>
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NOTABLE PROJECTS</Text>
          {projects.slice(0, 3).map((p, idx) => (
            <View key={idx} wrap={false} style={{ marginBottom: 6 }}>
              <Text style={styles.itemTitle}>{p.title}</Text>
              {p.git && p.git !== '#' ? (
                <Text style={[styles.itemSub, { color: '#0A66C2' }]}>
                  GitHub: {p.git.replace('https://', '')}
                </Text>
              ) : null}
              <Text style={styles.itemSub}>{p.description}</Text>
              <View style={styles.ul}>
                {p.highlights.slice(0, 3).map((h, i) => (
                  <Text key={i} style={styles.li}>
                    {h}
                  </Text>
                ))}
              </View>
              <Text style={styles.itemSub}>
                Technologies: {p.techStack.join(', ')}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default CVDocument;
