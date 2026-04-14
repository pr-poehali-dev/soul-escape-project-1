import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/d949b929-b1e0-440f-bf51-d60dbb4a0182/files/feb5dbcd-dbd3-47d2-835c-79b64ac3ba13.jpg";
const HIKERS_IMG = "https://cdn.poehali.dev/projects/d949b929-b1e0-440f-bf51-d60dbb4a0182/files/f275482b-e283-4d18-8c7a-8122f0e8d977.jpg";
const CAVE_IMG = "https://cdn.poehali.dev/projects/d949b929-b1e0-440f-bf51-d60dbb4a0182/files/364a2b2d-65ea-4d08-a6ee-babc54d21048.jpg";

const navLinks = [
  { label: "Об экспедиции", href: "#about" },
  { label: "Маршрут", href: "#route" },
  { label: "Программа", href: "#program" },
  { label: "Галерея", href: "#gallery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const routePoints = [
  { day: "День 1", title: "Бахчисарай — плато Мангуп", desc: "Трансфер из Симферополя. Подъём на Мангуп-Кале — пещерный город VI века. Ночёвка в базовом лагере.", icon: "MapPin" },
  { day: "День 2", title: "Каньон Чёрная речка", desc: "Прохождение узкого ущелья, переправы по камням, водопады. Обед у реки, вечерний костёр.", icon: "Waves" },
  { day: "День 3", title: "Гора Бойка — панорамы Крыма", desc: "Восхождение на одну из самых таинственных вершин. Реликтовый лес, дольмены, виды на море.", icon: "Mountain" },
  { day: "День 4", title: "Большой каньон Крыма", desc: "Знаменитая «Ванна молодости», узкие щели каньона. Возвращение в Бахчисарай, трансфер.", icon: "Compass" },
];

const program = [
  { time: "06:30", action: "Подъём и лёгкая разминка" },
  { time: "07:00", action: "Завтрак у костра" },
  { time: "08:00", action: "Выход на маршрут" },
  { time: "13:00", action: "Обед на природе" },
  { time: "14:30", action: "Продолжение пути" },
  { time: "18:00", action: "Разбивка лагеря" },
  { time: "20:00", action: "Ужин, разбор маршрута" },
  { time: "21:30", action: "Свободное время, костёр" },
];

const reviews = [
  {
    name: "Мария К.",
    city: "Москва",
    text: "Невероятный опыт! Гиды профессиональные, всё продумано до мелочей. Маршрут сложный, но абсолютно по силам даже новичку.",
    rating: 5,
    date: "Сентябрь 2024",
  },
  {
    name: "Алексей В.",
    city: "Санкт-Петербург",
    text: "Большой каньон просто потряс. Виды с горы Бойка — лучшее, что я видел в жизни. Обязательно вернусь.",
    rating: 5,
    date: "Август 2024",
  },
  {
    name: "Наталья Р.",
    city: "Краснодар",
    text: "Ехала одна, боялась — зря. Группа дружная, атмосфера волшебная. Гид знает каждый камень!",
    rating: 5,
    date: "Июль 2024",
  },
];

const dates = [
  { label: "15–18 мая 2025", spots: 3, price: "28 900 ₽" },
  { label: "12–15 июня 2025", spots: 6, price: "28 900 ₽" },
  { label: "10–13 июля 2025", spots: 8, price: "32 900 ₽" },
  { label: "7–10 августа 2025", spots: 2, price: "32 900 ₽" },
  { label: "4–7 сентября 2025", spots: 5, price: "28 900 ₽" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)", color: "var(--dark)" }}>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(30,21,16,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,180,142,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-semibold tracking-wide" style={{ color: "var(--sand)" }}>
            Крымская{" "}
            <span style={{ color: "var(--cream)", fontStyle: "italic" }}>Экспедиция</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link font-body text-sm tracking-wide"
                style={{ color: "var(--cream)", opacity: 0.85 }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="font-body text-sm px-5 py-2 rounded transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "var(--earth)", color: "var(--cream)" }}
            >
              Забронировать
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--cream)" }}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ backgroundColor: "rgba(30,21,16,0.97)" }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-base"
                style={{ color: "var(--cream)" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="font-body text-sm px-5 py-2 rounded text-center"
              style={{ backgroundColor: "var(--earth)", color: "var(--cream)" }}
              onClick={() => setMenuOpen(false)}
            >
              Забронировать
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(20,13,8,0.88) 0%, rgba(20,13,8,0.3) 50%, rgba(20,13,8,0.15) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
          <div className="max-w-2xl">
            <p
              className="font-body text-xs tracking-[0.35em] uppercase mb-5 animate-fade-in-up delay-100"
              style={{ color: "var(--sand)" }}
            >
              Горный Крым · 4 дня · Малые группы
            </p>
            <h1
              className="font-display text-6xl md:text-8xl font-light leading-[0.9] mb-6 animate-fade-in-up delay-200"
              style={{ color: "var(--cream)" }}
            >
              Там, где
              <br />
              <em style={{ color: "var(--sand)" }}>горы</em> живут
              <br />
              своей жизнью
            </h1>
            <p
              className="font-body text-base md:text-lg leading-relaxed mb-10 animate-fade-in-up delay-300"
              style={{ color: "rgba(245,237,224,0.78)" }}
            >
              Экспедиции по Крымским горам: каньоны, плато, пещерные города
              и панорамы, которые невозможно забыть
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <a
                href="#booking"
                className="font-body px-8 py-4 text-center font-medium transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--earth)", color: "var(--cream)", borderRadius: "2px" }}
              >
                Забронировать место
              </a>
              <a
                href="#about"
                className="font-body px-8 py-4 text-center font-medium transition-all duration-300 hover:opacity-90"
                style={{
                  border: "1px solid rgba(201,180,142,0.5)",
                  color: "var(--cream)",
                  borderRadius: "2px",
                }}
              >
                Узнать больше
              </a>
            </div>
          </div>

          <div
            className="mt-16 pt-8 flex flex-wrap gap-10 animate-fade-in-up delay-600"
            style={{ borderTop: "1px solid rgba(201,180,142,0.2)" }}
          >
            {[
              { val: "4 дня", label: "маршрут" },
              { val: "6–10", label: "человек в группе" },
              { val: "120+", label: "км пройдено" },
              { val: "с 2019", label: "проводим туры" },
            ].map((s) => (
              <div key={s.val}>
                <div className="font-display text-3xl font-medium" style={{ color: "var(--sand)" }}>{s.val}</div>
                <div className="font-body text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(245,237,224,0.55)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 animate-fade-in delay-700">
          <div
            className="font-body text-xs tracking-[0.3em] uppercase"
            style={{ color: "rgba(245,237,224,0.4)", writingMode: "vertical-rl" }}
          >
            Листайте вниз
          </div>
          <div className="w-px h-12 animate-pulse" style={{ backgroundColor: "rgba(201,180,142,0.4)" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--stone)" }}>
                Об экспедиции
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8" style={{ color: "var(--earth)" }}>
                Не тур —<br />
                <em>настоящее</em><br />
                приключение
              </h2>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: "rgba(30,21,16,0.72)" }}>
                Мы не возим людей по туристическим тропам. Мы ведём их туда, куда добираются единицы — на заросшие дубом плато, в узкие каньоны рек, к основаниям белоснежных известняковых скал.
              </p>
              <p className="font-body text-base leading-relaxed mb-10" style={{ color: "rgba(30,21,16,0.72)" }}>
                Каждая экспедиция — это малая группа до 10 человек, опытный проводник, снаряжение и ощущение, что Крым открылся вам по-настоящему.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Shield", text: "Полная страховка" },
                  { icon: "Package", text: "Снаряжение включено" },
                  { icon: "Utensils", text: "Питание на маршруте" },
                  { icon: "Car", text: "Трансфер" },
                ].map((f) => (
                  <div key={f.icon} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(107,79,58,0.12)" }}
                    >
                      <Icon name={f.icon} size={16} color="var(--earth)" />
                    </div>
                    <span className="font-body text-sm" style={{ color: "var(--dark)" }}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={HIKERS_IMG}
                alt="Группа на маршруте"
                className="w-full object-cover"
                style={{ height: "520px", borderRadius: "2px", boxShadow: "0 24px 60px rgba(30,21,16,0.18)" }}
              />
              <div
                className="absolute -bottom-6 -left-6 px-6 py-5"
                style={{
                  backgroundColor: "var(--earth)",
                  color: "var(--cream)",
                  borderRadius: "2px",
                  boxShadow: "0 12px 30px rgba(30,21,16,0.25)",
                }}
              >
                <div className="font-display text-3xl font-medium">200+</div>
                <div className="font-body text-xs tracking-wide opacity-75 mt-1">участников прошли маршрут</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: "var(--cream)" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--earth)" fillOpacity="0.08" />
        </svg>
      </div>

      {/* ── ROUTE ── */}
      <section id="route" className="py-24 px-6" style={{ backgroundColor: "rgba(107,79,58,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--stone)" }}>
              Маршрут
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ color: "var(--earth)" }}>
              Четыре дня
              <br />
              <em>в сердце Крыма</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {routePoints.map((p, i) => (
              <div
                key={i}
                className="card-hover p-6 relative overflow-hidden"
                style={{
                  backgroundColor: "var(--cream)",
                  border: "1px solid rgba(139,115,85,0.2)",
                  borderRadius: "4px",
                }}
              >
                <div
                  className="font-display text-6xl font-light absolute top-4 right-4 select-none"
                  style={{ color: "rgba(139,115,85,0.08)" }}
                >
                  {i + 1}
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(107,79,58,0.12)" }}
                >
                  <Icon name={p.icon} size={18} color="var(--earth)" />
                </div>
                <div className="font-body text-xs tracking-widest uppercase mb-2" style={{ color: "var(--stone)" }}>
                  {p.day}
                </div>
                <h3 className="font-display text-xl font-medium mb-3" style={{ color: "var(--earth)" }}>
                  {p.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(30,21,16,0.65)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAM ── */}
      <section id="program" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--stone)" }}>
                Программа дня
              </p>
              <h2 className="font-display text-5xl font-light mb-8" style={{ color: "var(--earth)" }}>
                Распорядок
                <br />
                <em>на маршруте</em>
              </h2>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "rgba(30,21,16,0.65)" }}>
                Ранний подъём, завтрак у огня, долгий день среди гор — и вечерний разбор маршрута под звёздным небом Крыма.
              </p>

              <div className="space-y-0">
                {program.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 py-4"
                    style={{
                      borderBottom: i < program.length - 1 ? "1px solid rgba(139,115,85,0.15)" : "none",
                    }}
                  >
                    <span
                      className="font-display text-lg font-medium w-16 flex-shrink-0"
                      style={{ color: "var(--stone)" }}
                    >
                      {item.time}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--sand)" }} />
                    <span className="font-body text-sm" style={{ color: "var(--dark)" }}>{item.action}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-16">
              <img
                src={CAVE_IMG}
                alt="Пещера Крыма"
                className="w-full object-cover"
                style={{ height: "480px", borderRadius: "4px", boxShadow: "0 20px 50px rgba(30,21,16,0.2)" }}
              />
              <div
                className="absolute top-6 -right-4 px-5 py-4 text-center"
                style={{ backgroundColor: "var(--pine)", color: "var(--cream)", borderRadius: "2px" }}
              >
                <div className="font-display text-2xl font-medium">от 28 900</div>
                <div className="font-body text-xs opacity-75 mt-0.5">рублей за экспедицию</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 px-6" style={{ backgroundColor: "rgba(107,79,58,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--stone)" }}>Галерея</p>
            <h2 className="font-display text-5xl font-light" style={{ color: "var(--earth)" }}>
              Крым глазами
              <br />
              <em>участников</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:row-span-2 overflow-hidden" style={{ borderRadius: "4px" }}>
              <img
                src={HERO_IMG}
                alt="Крымские горы"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ minHeight: "360px" }}
              />
            </div>
            <div className="overflow-hidden" style={{ borderRadius: "4px" }}>
              <img
                src={HIKERS_IMG}
                alt="Группа в горах"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ height: "240px" }}
              />
            </div>
            <div className="overflow-hidden" style={{ borderRadius: "4px" }}>
              <img
                src={CAVE_IMG}
                alt="Крымская пещера"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ height: "240px" }}
              />
            </div>
            <div
              className="md:col-span-2 overflow-hidden flex items-center justify-center"
              style={{ borderRadius: "4px", backgroundColor: "var(--earth)", minHeight: "200px" }}
            >
              <div className="text-center px-8 py-10">
                <div className="font-display text-3xl md:text-4xl font-light mb-3" style={{ color: "var(--cream)" }}>
                  «Горы открываются только тем, кто готов идти»
                </div>
                <div className="font-body text-sm opacity-60" style={{ color: "var(--cream)" }}>— Руслан, ведущий гид экспедиции</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="booking" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--stone)" }}>Забронировать</p>
              <h2 className="font-display text-5xl font-light mb-6" style={{ color: "var(--earth)" }}>
                Выберите даты
                <br />
                <em>и отправляйтесь</em>
              </h2>
              <p className="font-body text-sm leading-relaxed mb-8" style={{ color: "rgba(30,21,16,0.6)" }}>
                Выберите удобные даты. После заявки с вами свяжется наш менеджер и поможет завершить бронирование.
              </p>

              <div className="space-y-3 mb-8">
                {dates.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(i)}
                    className="w-full flex items-center justify-between p-4 transition-all duration-200 text-left"
                    style={{
                      border: selectedDate === i
                        ? "2px solid var(--earth)"
                        : "1px solid rgba(139,115,85,0.25)",
                      borderRadius: "4px",
                      backgroundColor: selectedDate === i ? "rgba(107,79,58,0.08)" : "transparent",
                    }}
                  >
                    <div>
                      <div className="font-body text-sm font-medium" style={{ color: "var(--dark)" }}>{d.label}</div>
                      <div className="font-body text-xs mt-0.5" style={{ color: d.spots <= 3 ? "#c0392b" : "var(--stone)" }}>
                        {d.spots <= 3 ? `⚡ Осталось ${d.spots} места` : `Мест: ${d.spots}`}
                      </div>
                    </div>
                    <div className="font-display text-xl font-medium" style={{ color: "var(--earth)" }}>{d.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div
              className="p-8"
              style={{
                backgroundColor: "var(--cream)",
                border: "1px solid rgba(139,115,85,0.2)",
                borderRadius: "4px",
                boxShadow: "0 16px 40px rgba(30,21,16,0.08)",
              }}
            >
              <h3 className="font-display text-2xl font-medium mb-6" style={{ color: "var(--earth)" }}>
                Оставить заявку
              </h3>

              {selectedDate !== null && (
                <div
                  className="mb-5 p-3 flex items-center gap-3"
                  style={{ backgroundColor: "rgba(107,79,58,0.1)", borderRadius: "2px" }}
                >
                  <Icon name="Calendar" size={16} color="var(--earth)" />
                  <span className="font-body text-sm" style={{ color: "var(--earth)" }}>
                    {dates[selectedDate].label} · {dates[selectedDate].price}
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="font-body text-xs tracking-wide uppercase block mb-1.5" style={{ color: "var(--stone)" }}>
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Иван Петров"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                    style={{
                      border: "1px solid rgba(139,115,85,0.3)",
                      borderRadius: "2px",
                      backgroundColor: "transparent",
                      color: "var(--dark)",
                    }}
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-wide uppercase block mb-1.5" style={{ color: "var(--stone)" }}>
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                    style={{
                      border: "1px solid rgba(139,115,85,0.3)",
                      borderRadius: "2px",
                      backgroundColor: "transparent",
                      color: "var(--dark)",
                    }}
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-wide uppercase block mb-1.5" style={{ color: "var(--stone)" }}>
                    Комментарий
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Вопросы, пожелания, опыт..."
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full px-4 py-3 font-body text-sm outline-none resize-none transition-all duration-200"
                    style={{
                      border: "1px solid rgba(139,115,85,0.3)",
                      borderRadius: "2px",
                      backgroundColor: "transparent",
                      color: "var(--dark)",
                    }}
                  />
                </div>

                <button
                  className="w-full py-4 font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--earth)",
                    color: "var(--cream)",
                    borderRadius: "2px",
                  }}
                >
                  Отправить заявку
                </button>

                <p className="font-body text-xs text-center" style={{ color: "rgba(30,21,16,0.45)" }}>
                  Оплата — после подтверждения. Возврат при отмене за 14+ дней.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-24 px-6" style={{ backgroundColor: "rgba(107,79,58,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--stone)" }}>Отзывы</p>
            <h2 className="font-display text-5xl font-light" style={{ color: "var(--earth)" }}>
              Говорят те,
              <br />
              <em>кто вернулся</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="card-hover p-8"
                style={{
                  backgroundColor: "var(--cream)",
                  border: "1px solid rgba(139,115,85,0.18)",
                  borderRadius: "4px",
                }}
              >
                <div className="flex mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} style={{ color: "var(--sand)" }}>★</span>
                  ))}
                </div>
                <p className="font-display text-lg font-light italic leading-relaxed mb-6" style={{ color: "var(--dark)" }}>
                  «{r.text}»
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-body text-sm font-medium" style={{ color: "var(--earth)" }}>{r.name}</div>
                    <div className="font-body text-xs mt-0.5" style={{ color: "var(--stone)" }}>{r.city}</div>
                  </div>
                  <div className="font-body text-xs" style={{ color: "rgba(30,21,16,0.4)" }}>{r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-24 px-6" style={{ backgroundColor: "var(--dark)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(201,180,142,0.6)" }}>
                Контакты
              </p>
              <h2 className="font-display text-5xl font-light mb-8" style={{ color: "var(--cream)" }}>
                Готовы ответить
                <br />
                <em style={{ color: "var(--sand)" }}>на любой вопрос</em>
              </h2>
              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "+7 (978) 000-00-00", sub: "Пн–Пт, 9:00–19:00" },
                  { icon: "Mail", label: "info@crimea-expedition.ru", sub: "Ответим за 2 часа" },
                  { icon: "MapPin", label: "Симферополь, Крым", sub: "Отправная точка экспедиций" },
                  { icon: "MessageCircle", label: "Telegram: @crimea_exp", sub: "Быстрая связь" },
                ].map((c) => (
                  <div key={c.icon} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(201,180,142,0.12)" }}
                    >
                      <Icon name={c.icon} size={16} color="var(--sand)" />
                    </div>
                    <div>
                      <div className="font-body text-sm" style={{ color: "var(--cream)" }}>{c.label}</div>
                      <div className="font-body text-xs mt-0.5" style={{ color: "rgba(245,237,224,0.4)" }}>{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-10 text-center"
              style={{
                border: "1px solid rgba(201,180,142,0.12)",
                borderRadius: "4px",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
            >
              <div className="font-display text-7xl font-light mb-3" style={{ color: "var(--sand)" }}>5.0</div>
              <div className="flex justify-center mb-3">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-2xl" style={{ color: "var(--sand)" }}>{s}</span>
                ))}
              </div>
              <p className="font-body text-sm mb-6" style={{ color: "rgba(245,237,224,0.5)" }}>
                средняя оценка от 200+ участников
              </p>
              <div
                className="w-16 mx-auto mb-6"
                style={{ height: "1px", backgroundColor: "rgba(201,180,142,0.2)" }}
              />
              <p className="font-display text-xl italic font-light" style={{ color: "rgba(245,237,224,0.7)" }}>
                «Крым — это не просто полуостров. Это состояние души»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6" style={{ backgroundColor: "var(--dark)", borderTop: "1px solid rgba(201,180,142,0.08)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg" style={{ color: "rgba(245,237,224,0.4)" }}>
            Крымская Экспедиция
          </div>
          <div className="font-body text-xs" style={{ color: "rgba(245,237,224,0.25)" }}>
            © 2025 · Все права защищены
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-xs transition-opacity hover:opacity-80"
                style={{ color: "rgba(245,237,224,0.35)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
