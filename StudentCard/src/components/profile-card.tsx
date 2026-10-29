import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ProfileCardProps {
  name: string;
  studentId: string;
  department: string;
  bio: string;
  skills?: string[]; // Optional array of strings
}

export default function ProfileCard({ name, studentId, department, bio, skills }: ProfileCardProps) {
  const initials = name.split(' ').map(word => word[0]).join('');
  const [followed, setFollowed] = useState(false);
  const [followerCount, setFollowerCount] = useState(120);

  const handleFollow = () => {
    setFollowed(!followed);
    setFollowerCount(prev => (followed ? prev - 1 : prev + 1));
  };

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.idBadge}>ID: {studentId}</Text>
      <Text style={styles.role}>{department}</Text>

      <Text style={styles.followersText}>{followerCount} Followers</Text>

      <View style={styles.divider} />

      <Text style={styles.bio}>{bio}</Text>

      {/* Conditional rendering for skills array */}
      {skills && skills.length > 0 && (
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      )}

      <TouchableOpacity
        style={[styles.button, followed && styles.buttonFollowed]}
        onPress={handleFollow}
      >
        <Text style={[styles.buttonText, followed && styles.buttonTextFollowed]}>
          {followed ? 'Following ✓' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffffff",
    borderRadius: 16,
    padding: 28,
    width: "88%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#252525ff',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#227bb6ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0D1F4E",
    marginBottom: 2,
  },
  idBadge: {
    fontSize: 12,
    color: "#0D9488",
    backgroundColor: "#E1F5EE",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    marginBottom: 4,
    overflow: "hidden",
  },
  role: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 16,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E2E8F0",
    marginBottom: 16,
  },
  bio: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 22,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 12,
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#EFF6FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  skillText: {
    fontSize: 12,
    color: '#1D4ED8',
    fontWeight: '500',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#0D9488',
    backgroundColor: 'transparent',
  },
  buttonFollowed: {
    backgroundColor: '#0D9488',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0D9488',
  },
  buttonTextFollowed: {
    color: '#FFFFFF',
  },
  followersText: {
  fontSize: 13,
  color: '#475569',
  marginBottom: 12,
  fontWeight: '500',
  },
});