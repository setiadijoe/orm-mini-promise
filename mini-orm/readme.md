# MINI ORM

- Pilihan A (poin 100 : many to many), kerjakan model dan fitur yang berkaitan dengan project dan engineer saja.

- Pilihan B (poin 75 : one to many), kerjakan model dan fitur yang berkaitan dengan project dan supervisor saja.

## Task

Kamu diminta untuk membuat aplikasi untuk melakukan project management di sebuah perusahaan Hardware Engineering. Berikut adalah requirement yang harus kamu penuhi:

1. Terdapat banyak project, setiap project memiliki `nama`, `status` (gunakan dropdown dengan pilihan: planning/on progress/done. harus re-populate ketika edit).

2. Supervisor adalah orang yang bertanggung jawab terhadap **beberapa** project sekaligus. Setiap supervisor memiliki `nama` dan `email`

3. Engineer adalah orang yang mengerjakan project. Satu engineer dapat mengerjakan lebih dari satu project, dan satu project akan dikerjakan oleh beberapa engineer. Setiap engineer memiliki `nama` dan `email`.

## Releases

### Release 0: Create Your ORM (A: 45, B: 30)

Berdasarkan tugas yang kamu pilih, buatlah table yang dibutuhkan (bila memilih many to many, buatlah conjunction table) dan buatlah `Class` model untuk setiap table beserta *method* yang dibutuhkan. Kamu bisa gunakan template class Model dibawah.

Untuk meng-*handle* akses database yang asynchronous, kamu boleh menggunakan *callback* atau *promise* (tambahan 20). Simpan semua file model di dalam folder tersendiri.

```javascript
class Model {
  constructor(raw) {
    this.attribute1 = raw.attribute1
    this.attribute2 = raw.attribute2
  }

  static findAll() {
    let results = models.map(m => new Model(m))
    return results
  }

  static findById() {}

  static findWhere() {}

  static create() {}

  static update() {}

  static destroy() {}

}
```

### Release 1: Start Your Web App (30)

Buatlah aplikasi CRUD untuk project, supervisor, dan engineer. Bagi routing berdasarkan model dan pisahkan ke dalam file tersendiri. Ikuti pola dibawah untuk membuat routing.

```
/project
  GET  /list        * menampilkan semua project
  GET  /add         * form untuk input project  baru
  POST /add         * untuk handle input project  baru
  GET  /update/:id  * form untuk update project
  POST /update/:id  * untuk handle update project
  GET  /delete/:id  * untuk handle delete project
```

### Release 2: Associate Your Models

**Untuk mendapatkan data yang berasosiasi, dilarang menggunakan query JOIN.**

Bila CRUD setiap model sudah selesai dibuat. Tambahkan fitur sebagai berikut:

### Pilihan A (25)

1. Di halaman yang menampilkan semua project, tambahkan fitur **[ASSIGN ENGINEER]** yang bertujuan untuk menambahkan engineer pada project tersebut dan menampilkan semua engineer yang sudah ditambahkan. (15)

2. Di halaman yang menampilkan semua engineer, tambahkan fitur **[PROJECTS ASSIGNED]** untuk menampilkan semua project yang sudah ditentukan untuk engineer tersebut. (10)

### Pilihan B (15)

1. Di halaman yang menampilkan semua supervisor, tambahkan fitur **[ASSIGN PROJECT]** yang bertujuan untuk memberikan project pada supervisor tersebut dan menampilkan semua project yang sudah diberikan.
