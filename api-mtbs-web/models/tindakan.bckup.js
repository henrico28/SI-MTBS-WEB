const pengobatan = require("./pengobatan");

const processTindakan = (data) => {
  let res = Array();
  let tbu = Array();
  let bsb = Array();
  let diare = Array();
  let demam = Array();
  let telinga = Array();
  let gizi = Array();
  let anemia = Array();
  let hiv = Array();

  // TBU
  if (data.tbu.klasifikasiTBU.tbu_klasifikasi === "Penyakit sangat berat") {
    if (data.tbu.ansTBU.tbu_tidakBisaMinum === true) {
      tbu.push(
        pengobatan.classifyPengobatan(
          "tandabahayaumum",
          "tidak dapat minum / menyusu",
          "Antibiotik",
          data
        )
      );
    }
    if (data.tbu.ansTBU.tbu_kejang === true) {
      tbu.push(
        pengobatan.classifyPengobatan(
          "tandabahayaumum",
          "kejang",
          "Diazepam",
          data
        )
      );
    }
    if (data.tbu.ansTBU.tbu_stridor === true) {
      tbu.push("Pastikan tidak ada sumbatan jalan napas");
    }
    if (
      data.tbu.ansTBU.tbu_stridor === true &&
      data.tbu.ansTBU.tbu_sianosis === true &&
      data.tbu.ansTBU.tbu_pucatDingin === true
    ) {
      tbu.push(
        "berikan oksigen 3 - 5 liter/menit melalui nasal prong dengan perangkat oksigen standar (tabung O2 dan humidifier)"
      );
    }
    tbu.push(
      "Cegah agar gula darah tidak turun",
      "Jaga anak tetap hangat",
      "RUJUK SEGERA"
    );
  }

  // BATUK
  if (data.batuk.klasifikasiBatuk.bsb_klasifikasi === "Pneumonia berat") {
    bsb.push(
      "Beri Oksigen maksimal 2-3 liter/menit dengan menggunakan nasal prong"
    );
    bsb.push(
      pengobatan.classifyPengobatan("batuk", "Pneumonia", "Antibiotik", data)
    );
    bsb.push("RUJUK SEGERA");
  } else if (data.batuk.klasifikasiBatuk.bsb_klasifikasi === "Pneumonia") {
    bsb.push(
      pengobatan.classifyPengobatan("batuk", "Pneumonia", "Antibiotik", data)
    );
    bsb.push(
      "Beri pelega tenggorokan dan pereda batuk yang aman",
      "Obati wheezing bila ada",
      "Nasehati kapan kembali segera",
      "Kunjungan ulang 2 hari"
    );

    if (data.batuk.ansBatuk.bsb_lamaHari > 14) {
      bsb.push("RUJUK untuk pemeriksaan lanjutan");
    }
  } else {
    bsb.push(
      "Beri pelega tenggorokan dan pereda batuk yang aman",
      "Nasehati kapan kembali segera",
      "Kunjungan ulang 2 hari jika tidak ada perbaikan"
    );

    if (data.batuk.ansBatuk.bsb_wheezing === true) {
      bsb.push("Obati wheezing");
    }
    if (data.batuk.ansBatuk.bsb_lamaHari >= 14) {
      bsb.push("Rujuk untuk pemeriksaan TB dan sebab lain");
    }
  }

  // DIARE
  let klasifikasiBeratLainDiare =
    data.tbu.klasifikasiTBU.tbu_status === "danger" ||
    data.batuk.klasifikasiBatuk.bsb_status === "warning" ||
    data.batuk.klasifikasiBatuk.bsb_status === "danger" ||
    data.demam.klasifikasiDemam.demam_status === "warning" ||
    data.demam.klasifikasiDemam.demam_status === "danger" ||
    data.telinga.klasifikasiTelinga.telinga_status === "warning" ||
    data.telinga.klasifikasiTelinga.telinga_status === "danger" ||
    data.gizi.klasifikasiGizi.gizi_status === "warning" ||
    data.gizi.klasifikasiGizi.gizi_status === "danger" ||
    data.anemia.klasifikasiAnemia.anemia_status === "warning" ||
    data.anemia.klasifikasiAnemia.anemia_status === "danger" ||
    data.hiv.klasifikasiHIV.klasifikasiHIV.hiv_status === "warning" ||
    data.hiv.klasifikasiHIV.klasifikasiHIV.hiv_status === "danger";
  if (
    data.diare.klasifikasiDiare.diare_klasifikasi.includes(
      "Diare Dehidrasi Berat"
    )
  ) {
    if (klasifikasiBeratLainDiare !== true) {
      diare.push(
        "Beri cairan untuk dehidrasi berat dan tablet Zinc sesuai rencana terapi C"
      );
    } else {
      diare.push("RUJUK SEGERA");
      if (data.diare.ansDiare.diare_isNotMinum === true) {
        diare.push("Berikan ASI dan larutan oralit selama perjalanan");
      }
    }
    if (data.dataanak.dataAnak.umurAnak / 30 / 12 > 2) {
      diare.push(
        "Jika ada wabah kolera di daerah tersebut, beri antibiotik untuk kolera" +
          pengobatan.classifyPengobatan("diare", "Kolera", "Antibiotik", data)
      );
    }
  } else if (
    data.diare.klasifikasiDiare.diare_klasifikasi.includes(
      "Diare Dehidrasi Ringan/Sedang"
    )
  ) {
    diare.push(
      "Beri cairan, tablet Zinc dan makanan sesuai Rencana Terapi B",
      "Nasihati kapan kembali segera",
      "Kunjungan ulang 3 hari jika tidak ada perbaikan"
    );
    if (klasifikasiBeratLainDiare === true) {
      diare.push("RUJUK SEGERA");
      if (data.diare.ansDiare.diare_isNotMinum === true) {
        diare.push("Berikan ASI dan larutan oralit selama perjalanan");
      }
    }
  } else {
    diare.push(
      "Beri cairan, tablet Zinc dan makanan sesuai Rencana Terapi A",
      "Nasihati kapan kembali segera",
      "Kunjungan ulang 3 hari jika tidak ada perbaikan"
    );
  }

  if (
    data.diare.klasifikasiDiare.diare_klasifikasi.includes(
      "Diare Persisten Berat"
    )
  ) {
    diare.push(
      "Atasi dehidrasi sebelum dirujuk, kecuali ada klasifikasi berat lain",
      "RUJUK"
    );
  } else if (
    data.diare.klasifikasiDiare.diare_klasifikasi.includes("Diare Persisten")
  ) {
    diare.push(
      "Nasihati pemberian makan untuk Diare Persisten",
      "Beri tablet zinc selama 10 hari berturut-turut",
      "Nasihati kapan kembali segera",
      "Kunjungan ulang 3 hari"
    );
  }

  if (data.diare.klasifikasiDiare.diare_klasifikasi.includes("Disentri")) {
    diare.push(
      pengobatan.classifyPengobatan("diare", "Disentri", "Antibiotik", data)
    );
    diare.push(
      "Beri tablet zinc selama 10 hari berturut-turut",
      "Nasihati kapan kembali segera",
      "Kunjungan ulang 3 hari"
    );
  }

  // DEMAM
  if (
    data.demam.ansDemam.demam_isDaerahEndemis === "Tinggi" ||
    data.demam.ansDemam.demam_isDaerahEndemis === "Rendah" ||
    data.demam.ansDemam.demam_isBerkunjungDaerahEndemis === "Tinggi" ||
    data.demam.ansDemam.demam_isBerkunjungDaerahEndemis === "Rendah"
  ) {
    if (
      data.demam.klasifikasiDemam.demam_klasifikasi.includes(
        "Penyakit Berat Dengan Demam"
      )
    ) {
      demam.push(
        "Beri dosis pertama artemeter injeksi atau kinin injeksi untuk malaria berat",
        "Beri dosis pertama antibiotik yang sesuai",
        "Cegah agar gula darah tidak turun"
      );
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
      demam.push("RUJUK SEGERA");
    } else if (
      data.demam.klasifikasiDemam.demam_klasifikasi.includes("Malaria")
    ) {
      demam.push(
        pengobatan.classifyPengobatan(
          "malaria",
          "Malaria",
          "Obat Anti Malaria Falsiparum",
          data
        ),
        pengobatan.classifyPengobatan(
          "malaria",
          "Malaria",
          "Obat Anti Malaria Vivax",
          data
        ),
        pengobatan.classifyPengobatan(
          "malaria",
          "Malaria",
          "Obat Anti Malaria Infeksi Campur",
          data
        )
      );
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
      demam.push(
        "Nasihati kapan kembali segera",
        "Kunjungan ulang 3 hari jika tetap demam",
        "Jika demam berlanjut lebih dari 7 hari, RUJUK untuk penilaian lebih lanjut"
      );
    } else if (
      data.demam.klasifikasiDemam.demam_klasifikasi.includes(
        "Demam Mungkin Bukan Malaria"
      )
    ) {
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
      demam.push(
        "Obati penyebab lain dari demam",
        "Nasihati kapan kembali segera",
        "Kunjungan ulang 3 hari jika tetap demam",
        "Jika demam berlanjut lebih dari 7 hari, RUJUK untuk penilaian lebih lanjut"
      );
    }
  } else {
    if (
      data.demam.klasifikasiDemam.demam_klasifikasi.includes(
        "Penyakit Berat Dengan Demam"
      )
    ) {
      demam.push(
        "Beri dosis pertama antibiotik yang sesuai",
        "Cegah agar gula darah tidak turun"
      );
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
      demam.push("RUJUK SEGERA");
    } else if (
      data.demam.klasifikasiDemam.demam_klasifikasi.includes(
        "Demam Bukan Malaria"
      )
    ) {
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
      demam.push(
        "Obati penyebab lain dari demam",
        "Nasihati kapan kembali segera",
        "Kunjungan ulang 2 hari jika tetap demam",
        "Jika demam berlanjut lebih dari 7 hari, RUJUK untuk penilaian lebih lanjut"
      );
    }
  }

  if (
    data.demam.klasifikasiDemam.demam_klasifikasi.includes(
      "Campak Dengan Komplikasi Berat"
    )
  ) {
    demam.push("Beri dosis pertama antibiotik yang sesuai");
    if (
      data.demam.ansDemam.demam_korneaKeruh === true ||
      data.demam.ansDemam.demam_nanahDiMata === true
    ) {
      demam.push("Berikan salep mata antibiotik");
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Campak dengan komplikasi mata atau mulut",
          "Vitamin A",
          data
        )
      );
    } else {
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Campak tanpa komplikasi mata atau mulut",
          "Vitamin A",
          data
        )
      );
    }
    if (data.dataanak.dataAnak.suhuAnak >= 38.5) {
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        )
      );
    }
    demam.push("RUJUK SEGERA");
  } else if (
    data.demam.klasifikasiDemam.demam_klasifikasi.includes(
      "Campak Dengan Komplikasi Pada Mata Dan/Atau Mulut"
    )
  ) {
    demam.push(
      pengobatan.classifyPengobatan(
        "demam",
        "Campak dengan komplikasi mata atau mulut",
        "Vitamin A",
        data
      )
    );
    if (data.demam.ansDemam.demam_nanahDiMata === true) {
      demam.push("Beri salep mata antibiotik");
    }
    if (data.demam.ansDemam.demam_isLukaMulut === true) {
      demam.push("Oleskan antiseptik mulut");
    }
    if (
      data.gizi.ansGizi.gizi_BBmenurutPBAtauTB ===
      "BB/PB (TB) < -3 SD (Sangat Kurus)"
    ) {
      demam.push(
        pengobatan.classifyPengobatan(
          "vitamina",
          "Defisiensi Vit A, Xerofthalmia dan Gizi Sangat Kurus",
          "Vitamin A",
          data
        )
      );
    }
    demam.push("Kunjungan ulang 3 hari");
  }

  if (
    data.demam.klasifikasiDemam.demam_klasifikasi.includes(
      "Demam Berdarah Dengue (DBD)"
    )
  ) {
    if (data.demam.ansDemam.demam_isEkstremitasDingin === true) {
      demam.push(
        "Beri Oksigen 2-4 liter/menit dan beri segera cairan intravena sesuai petunjuk"
      );
    } else {
      if (
        data.demam.ansDemam.demam_anakMuntah === true &&
        data.demam.ansDemam.demam_anakSeringMuntah === true
      ) {
        demam.push(
          "Beri cairan infus Ringer Laktat/Ringer Asetat, jumlah cairan rumatan"
        );
      } else {
        demam.push(
          "Beri oralit atau cairan lain sebanyak mungkin dalam perjalanan ke rumah sakit"
        );
      }
    }
    if (data.dataanak.dataAnak.suhuAnak >= 38.5) {
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        ) + "tidak boleh golongan salisilat dan ibuprofen."
      );
    }
    demam.push("RUJUK SEGERA");
  } else if (
    data.demam.klasifikasiDemam.demam_klasifikasi.includes("Mungkin DBD")
  ) {
    if (data.dataanak.dataAnak.suhuAnak >= 38.5) {
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        ) + "tidak boleh golongan salisilat dan ibuprofen."
      );
    }
    demam.push(
      "Nasihati untuk lebih banyak minum: oralit/cairan lain.",
      "Nasihati kapan kembali segera",
      "Kunjungan ulang 1 hari"
    );
  } else if (
    data.demam.klasifikasiDemam.demam_klasifikasi.includes(
      "Demam Mungkin Bukan DBD"
    )
  ) {
    demam.push("Obati penyebab lain dari demam");
    if (data.dataanak.dataAnak.suhuAnak >= 38.5) {
      demam.push(
        pengobatan.classifyPengobatan(
          "demam",
          "Demam tinggi",
          "Parasetamol",
          data
        ) + "tidak boleh golongan salisilat dan ibuprofen."
      );
    }
    demam.push(
      "Nasihati kapan kembali segera",
      "Kunjungan ulang 2 hari jika tetap demam"
    );
  }

  // TELINGA
  if (data.telinga.klasifikasiTelinga.telinga_klasifikasi === "Mastoiditis") {
    telinga.push(
      pengobatan.classifyPengobatan(
        "telinga",
        "Infeksi Telinga Akut",
        "Antibiotik",
        data
      )
    );
    telinga.push(
      pengobatan.classifyPengobatan(
        "telinga",
        "Sakit Telinga",
        "Parasetamol",
        data
      )
    );
    telinga.push("Beri dosis pertama antibiotik yang sesuai", "RUJUK SEGERA");
  } else if (
    data.telinga.klasifikasiTelinga.telinga_klasifikasi ===
    "Infeksi Telinga Kronis"
  ) {
    telinga.push(
      "Beri antibiotik yang sesuai selama 7 hari",
      "Keringkan telinga dengan bahan penyerap",
      "Kunjungan ulang 5 hari"
    );
  } else if (
    data.telinga.klasifikasiTelinga.telinga_klasifikasi ===
    "Infeksi Telinga Akut"
  ) {
    telinga.push(
      pengobatan.classifyPengobatan(
        "telinga",
        "Infeksi Telinga Akut",
        "Antibiotik",
        data
      )
    );
    telinga.push(
      pengobatan.classifyPengobatan(
        "telinga",
        "Sakit Telinga",
        "Parasetamol",
        data
      )
    );
    telinga.push(
      "Keringkan telinga dengan bahan penyerap setelah dicuci dengan NaCl 0,9% atau H2O23%",
      "Beri tetes telinga yang sesuai",
      "Kunjungan ulang 5 hari"
    );
  } else if (
    data.telinga.klasifikasiTelinga.telinga_klasifikasi ===
    "Tidak Ada Infeksi Telinga"
  ) {
    telinga.push("Tangani masalah telinga yang ditemukan");
  }

  // GIZI
  if (
    data.gizi.klasifikasiGizi.gizi_klasifikasi ===
    "Sangat Kurus Dengan Komplikasi"
  ) {
    gizi.push("Beri dosis pertama antibiotik yang sesuai");
    gizi.push(
      pengobatan.classifyPengobatan(
        "vitamina",
        "Defisiensi Vit A, Xerofthalmia dan Gizi Sangat Kurus",
        "Vitamin A",
        data
      )
    );
    gizi.push(
      "Cegah gula darah tidak turun",
      "Hangatkan badan",
      "RUJUK SEGERA"
    );
  } else if (
    data.gizi.klasifikasiGizi.gizi_klasifikasi ===
    "Sangat Kurus Tanpa Komplikasi"
  ) {
    gizi.push("Beri antibiotik yang sesuai selama 5 hari");
    gizi.push(
      pengobatan.classifyPengobatan(
        "vitamina",
        "Defisiensi Vit A, Xerofthalmia dan Gizi Sangat Kurus",
        "Vitamin A",
        data
      )
    );
    gizi.push(
      "Cegah gula darah tidak turun",
      "Hangatkan badan",
      "RUJUK untuk penanganan gizi sangat kurus termasuk kemungkinan adanya penyakit penyerta",
      "Nasihati kapan kembali segera",
      "Kunjungan ulang 7 hari"
    );
  } else if (data.gizi.klasifikasiGizi.gizi_klasifikasi === "Kurus") {
    gizi.push(
      "Lakukan Penilaian Pemberian Makan pada anak dan nasihati sesuai Anjuran Makan Untuk Anak Sehat Maupun Sakit. Bila ada masalah pemberian makan, kunjungan ulang 7 hari",
      "RUJUK untuk penilaianan kemungkinan adanya penyakit penyerta (Infeksi TB dll)",
      "Kunjungan ulang 30 hari"
    );
  } else if (data.gizi.klasifikasiGizi.gizi_klasifikasi === "Gizi Normal") {
    gizi.push(
      "Jika anak berumur kurang dari 2 tahun, lakukan penilaian pemberian makan dan nasihati sesuai Anjuran Makan Untuk Anak Sehat Maupun Sakit. Bila ada masalah pemberian makan, kunjungan ulang 7 hari",
      "Anjurkan untuk menimbang berat badan anak setiap bulan"
    );
  }

  // ANEMIA
  if (data.anemia.klasifikasiAnemia.anemia_klasifikasi === "Anemia Berat") {
    if (data.dataanak.dataAnak.umurAnak / 30 >= 4) {
      anemia.push(
        pengobatan.classifyPengobatan("anemia", "Anemia", "Obat Cacing", data)
      );
    }
    anemia.push("Bila masih menyusu, teruskan pemberian ASI", "RUJUK SEGERA");
  } else if (data.anemia.klasifikasiAnemia.anemia_klasifikasi === "Anemia") {
    anemia.push(
      pengobatan.classifyPengobatan("anemia", "Anemia", "Zat Besi", data)
    );
    if (data.dataanak.dataAnak.umurAnak / 30 >= 4) {
      anemia.push(
        pengobatan.classifyPengobatan("anemia", "Anemia", "Obat Cacing", data)
      );
    }
    anemia.push(
      "Lakukan Penilaian Pemberian Makan pada anak. Bila ada masalah, beri konseling pemberian makan dan kunjungan ulang 7 hari",
      "Lakukan pemberiksaan tinja untuk deteksi kecacingan",
      "Nasihati kapan kembali segera",
      "Kunjungan ulang 14 hari"
    );

    if (data.demam.ansDemam.demam_isDaerahEndemis === "Tinggi") {
      anemia.push(
        "Jika daerah Endemis Tinggi Malaria: periksa dan obati malaria terlebih dahulu jika positif"
      );
    }
  } else if (
    data.anemia.klasifikasiAnemia.anemia_klasifikasi === "Tidak Anemia"
  ) {
    anemia.push(
      "Jika anak < 2 tahun, nilai pemberian makanan pada anak. Jika ada masalah pemberian makanan, kunjungan ulang 7 hari"
    );
  }

  //HIV
  if (data.hiv.klasifikasiHIV.hiv_klasifikasi === "Infeksi HIV Terkonfirmasi") {
    hiv.push(
      "Rujuk ke puskesmas/RS Rujukan ARV untuk mendapatkan terapi ARV dan Kotrimoksasol profilaksis"
    );
  } else if (
    data.hiv.klasifikasiHIV.hiv_klasifikasi === "Diduga terinfeksi HIV"
  ) {
    hiv.push(
      "Rujuk ke puskesmas/RS Rujukan ARV untuk mendapatkan pemeriksaan lebih lanjut dan terapi ARV dan Kotrimoksasol profilaksis"
    );
  } else if (data.hiv.klasifikasiHIV.hiv_klasifikasi === "Terpajan HIV") {
    hiv.push(
      "Rujuk ke puskesmas/RS rujukan ARV untuk mendapatkan pemeriksaan lebih lanjut dan ARV profilaksis serta Kotrimoksasol profilaksis"
    );
  } else if (
    data.hiv.klasifikasiHIV.hiv_klasifikasi === "Mungkin bukan infeksi HIV"
  ) {
    hiv.push("Tangani Infeksi yang ada");
  }

  res.push(tbu);
  res.push(bsb);
  res.push(diare);
  res.push(demam);
  res.push(telinga);
  res.push(gizi);
  res.push(anemia);
  res.push(hiv);
  return res;
};

module.exports = {
  processTindakan,
};
