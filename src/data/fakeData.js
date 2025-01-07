export const siteConfig = {
  siteName: "CleanMax Admin",
  companyName: "CleanMax Temizlik Şirketi",
  userInfo: {
    name: "Ahmet Yılmaz",
    role: "Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  }
}

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: "home",
    path: "/dashboard"
  },
  {
    id: 2,
    title: "Müşteriler",
    icon: "users",
    path: "/customers"
  },
  {
    id: 3,
    title: "Hizmetler",
    icon: "briefcase",
    path: "/services"
  },
  {
    id: 4,
    title: "Personel",
    icon: "user-group",
    path: "/staff"
  },
  {
    id: 5,
    title: "Randevular",
    icon: "calendar",
    path: "/appointments"
  },
  {
    id: 6,
    title: "Ödemeler",
    icon: "credit-card",
    path: "/payments"
  },
  {
    id: 7,
    title: "Raporlar",
    icon: "chart-bar",
    path: "/reports"
  },
  {
    id: 8,
    title: "Ayarlar",
    icon: "cog",
    path: "/settings"
  },
  {
    id: 9,
    title: "Personel Başvuruları",
    icon: "file-signature",
    path: "/applications"
  },
  {
    id: 10,
    title: "Personel Listesi",
    icon: "users",
    path: "/staff-list"
  }
] 

export const jobApplications = [
  {
    id: 1,
    firstName: "Mehmet",
    lastName: "Demir",
    email: "mehmet.demir@email.com",
    phone: "0532 XXX XX XX",
    position: "Temizlik Personeli",
    experience: "3 yıl",
    applicationDate: "2024-01-15",
    status: "pending", // pending, approved, rejected
  },
  {
    id: 2,
    firstName: "Ayşe",
    lastName: "Yılmaz",
    email: "ayse.yilmaz@email.com",
    phone: "0533 XXX XX XX",
    position: "Ekip Lideri",
    experience: "5 yıl",
    applicationDate: "2024-01-14",
    status: "approved",
  },
  {
    id: 3,
    firstName: "Ali",
    lastName: "Kaya",
    email: "ali.kaya@email.com",
    phone: "0535 XXX XX XX",
    position: "Temizlik Personeli",
    experience: "1 yıl",
    applicationDate: "2024-01-16",
    status: "rejected",
  },
] 