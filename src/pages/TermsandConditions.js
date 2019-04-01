import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/_style2.scss';
import Logo from '../assets/images/blue-logo.png'

export default class TermsandConditions extends Component {
  componentDidMount(){
    document.title= "Terms & Conditions - RelaOne"
}

  render() {
    return (
      <div className="container2 whitebg my-5">
        <div className="logo" >
          <Link to="/"><img className="my-5" src={Logo} alt=""/></Link>
        </div>
        <div className="right">
          <h3 className="mb-3">Syarat dan Ketentuan</h3>

          <p className="text-justify mb-3">RelaOne berkomitmen untuk melindungi privasi anda dan akan membuat upaya yang wajar untuk memberikan pengalaman pengguna yang aman dan nyaman. Syarat Penggunaan ini ("Syarat Penggunaan") menetapkan pengumpulan data secara online dan kebijakan penggunaan yang berlaku untuk situs RelaOne.</p>
          <p className="text-justify mb-3"> Harap dicatat bahwa penggunaan Anda atas Situs dan layanan tunduk pada Kebijakan Privasi yang dapat Anda akses dari situs kami atau halaman situs lainnya dengan mengklik Kebijakan Privasi.</p>
          <p className="text-justify mb-3">Dengan mengakses dan menggunakan Situs ini, Anda setuju, tanpa batasan atau kualifikasi, untuk terikat dengan Kebijakan Privasi dan Syarat Penggunaan. Jika Anda tidak setuju dengan Kebijakan Privasi atau Syarat Penggunaan, Anda tidak harus mengakses atau menggunakan Situs untuk tujuan apapun. Kami berhak untuk menghentikan atau membatasi akses Anda ke Situs untuk setiap pelanggaran terhadap Kebijakan Privasi atau Syarat Penggunaan, atau karena alasan lain, dalam kebijakan tunggal kami.</p>

          <p className="font-weight-bold">Tanggung Jawab Relawan</p>
          <p className="text-justify mb-3">Sebagai relawan, Anda bertanggung jawab penuh atas perilaku dan implikasi perilaku Anda pada Situs maupun ketika Anda mendaftar menjadi relawan dan berinteraksi dengan organisasi sosial. RelaOne tidak bertanggung jawab atas perilaku Anda saat berinteraksi dengan organisasi-organisasi sosial.</p>

          <p className="font-weight-bold">Tanggung Jawab Organisasi Sosial</p>
          <p className="text-justify mb-3">Sebagai organisasi sosial yang menggunakan situs RelaOne, Anda bertanggung jawab penuh atas kandungan dari informasi apapun yang Anda berikan. Anda juga bertanggung jawab penuh atas proses dan hasil pemilihan relawan dan mengerti bahwa layanan dari RelaOne hanya sebatas memberikan akses kepada calon relawan.</p>
          <p className="text-justify mb-3">Bagi organisasi yang merekrut RelaOne di bawah umur atau mencari relawan untuk kegiatan sosial yang melibatkan anak-anak di bawah umur, RelaOne sangat menyarankan organisasi sosial untuk mengambil langkah-langkah perlindungan anak yang dinilai sesuai dengan kebutuhannya. Langkah-langkah dan bentuk perlindungan ini sepenuhnya menjadi tanggung jawab organisasi sosial yang bersangkutan.</p>
          <p className="text-justify mb-3">RelaOne melakukan usaha untuk mendorong baik relawan dan organisasi agar dapat saling memperlakukan satu sama lainnya sesuai dengan etika dan hukum yang berlaku untuk saling mendukung tercapainya tujuan kegiatan kerelawanan.</p>
          <p className="font-weight-bold">Kesepakatan Antara Relawan dan Organisasi Sosial</p>
          <p className="text-justify mb-3">Kesepakatan antara relawan dan organisasi sosial adalah diluar tanggung jawab dari RelaOne. Layanan RelaOne hanya terbatas dalam mempertemukan organisasi-organisasi sosial dan calon relawan.</p>

          <p className="font-weight-bold">Komitmen Kami Untuk Privasi</p>
          <p className="text-justify mb-3">RelaOne berkomitmen untuk melindungi privasi Anda dan akan melakukan upaya yang wajar untuk memberikan pengalaman pengguna yang aman dan nyaman. Kebijakan privasi ini ("Kebijakan Privasi") mengatur mengenai pengumpulan informasi yang kami lakukan secara online melalui situs RelaOne dan penggunaan informasi tersebut, serta kebijakan penggunaan yang berlaku untuk Situs. Kebijakan Privasi ini tidak berlaku untuk informasi yang kami kumpulkan dengan cara lain (misalnya melalui email, panggilan telepon, atau dokumen tertulis). Harap dicatat bahwa penggunaan Anda atas Situs dan layanan yang kami berikan melalui Situs tunduk pada persyaratan penggunaan (“Syarat Penggunaan”) yang dapat Anda akses dari Situs dengan mengklik Syarat Penggunaan.</p>
          <p className="text-justify mb-3">Dengan mengakses dan menggunakan Situs ini, Anda menyetujui Kebijakan Privasi dan Syarat Penggunaan tanpa batasan atau kualifikasi. Jika Anda tidak setuju dengan Kebijakan Privasi dan/atau Syarat Penggunaan, Anda tidak harus mengakses atau menggunakan Situs untuk tujuan apapun. Kami berhak untuk menghentikan atau membatasi akses Anda ke Situs karena pelanggaran apapun yang Anda lakukan terhadap Kebijakan Privasi atau Syarat Penggunaan, atau karena alasan lain, atas kebijakan kami semata.</p>

          <p className="font-weight-bold">Lingkup Kebijakan Privasi</p>
          <p className="text-justify mb-3">Dengan mengakses dan menggunakan Situs ini, Anda menyetujui Kebijakan Privasi dan Syarat Penggunaan tanpa batasan atau kualifikasi. Jika Anda tidak setuju dengan Kebijakan Privasi dan/atau Syarat Penggunaan, Anda tidak harus mengakses atau menggunakan Situs untuk tujuan apapun. Kami berhak untuk menghentikan atau membatasi akses Anda ke Situs karena pelanggaran apapun yang Anda lakukan terhadap Kebijakan Privasi atau Syarat Penggunaan, atau karena alasan lain, atas kebijakan kami semata.Kebijakan Privasi ini berlaku atas semua informasi yang Anda berikan kepada RelaOne melalui Situs. Kami tidak bertanggung jawab atas pengumpulan informasi, praktik privasi, atau kebijakan situs pihak ketiga manapun yang tautannya ada pada Situs.</p>

          <p className="font-weight-bold">Informasi Yang Kami Kumpulkan</p>
          <p className="text-justify mb-3">Pada umumnya kami mengumpulkan dua jenis informasi, yaitu informasi pribadi ("IIP") dan informasi non-pribadi ("Non- IIP"). IIP adalah setiap informasi yang dapat digunakan untuk secara khusus mengidentifikasi Anda sebagai individu. Misalnya, Anda dapat memberikan dan kami dapat mengumpulkan nama, alamat email, alamat rumah/kantor, nomor telepon, atau informasi serupa melalui Situs. Non-IIP terdiri dari informasi yang tidak secara khusus mengidentifikasi Anda. Berikut penjelasan mengenai cara kami mengumpulkan dan menggunakan IIP dan Non-IIP Anda.</p>

          <p className="font-weight-bold">Bagaimana Kami Mengumpulkan dan Menggunakan Informasi Cookies dan Beacons</p>

          <p className="text-justify mb-3">Seperti situs web pada umumnya, kami menggunakan cookie dan teknologi lainnya, termasuk web beacon, sehingga kami dapat meningkatkan pengalaman pengguna Situs. Web beacon dan cookie mengumpulkan informasi Non-IIP seperti URL, browser dan informasi OS, alamat IP, operator seluler, perangkat mobile, dan ISP Anda.</p>

          <p className="text-justify mb-3">Cookie adalah bit data yang ditempatkan pada hard drive Anda ketika Anda mengunjungi situs web. Sebuah file cookie berisi informasi yang dapat mengidentifikasi Anda secara anonim dan menjaga privasi akun Anda. Kami menggunakan cookie untuk mempertahankan identitas Anda antara sesi sehingga Situs dapat dipersonalisasi berdasarkan preferensi atau sejarah penggunaan Anda. Kami juga dapat menggunakan cookie untuk melacak informasi tentang halaman yang Anda kunjungi dalam Situs untuk membantu kami mengukur efektivitas dari Situs atau kandungan Situs. Kami juga dapat menyimpan informasi lain seperti pencarian terbaru dalam sesi Anda. Kami menggunakan cookie untuk mengetahui, misalnya, apakah Anda pernah mengunjungi Situs sebelumnya atau jika Anda adalah pengunjung baru, dan untuk membantu kami memahami bagian Situs yang paling menarik bagi Anda. Cookie juga dapat meningkatkan pengalaman online Anda dengan menyimpan preferensi dan kata kunci, sehingga Anda tidak perlu memasukkan kembali informasi ini setiap kali Anda mengunjungi Situs.</p>

          <p className="text-justify mb-3">Kebanyakan web browser secara otomatis menerima cookie, tetapi Anda dapat mengkonfigurasi browser untuk berhenti menerima cookie baru, memberitahu Anda bila ada cookie yang baru diterima, dan menonaktifkan cookie yang ada. Anda dapat memilih untuk menonaktifkan cookie di browser Anda, namun Anda mungkin tidak dapat menikmati keuntungan optimal dari semua fitur Situs.</p>

          <p className="font-weight-bold">File log</p>

          <p className="text-justify mb-3">Bila Anda menggunakan Situs, secara otomatis kami mengumpulkan informasi dasar dari browser Anda, seperti alamat IP, jenis browser, ISP, OS, dan tanggal/waktu perangko untuk menganalisa kecenderungan, mengelola Situs, menganalisa gangguan (bug), dan mengumpulkan informasi demografis yang luas.</p>

          <p className="font-weight-bold">Informasi Tentang Anda</p>

          <p className="text-justify mb-3">Ketika Anda mendaftarkan diri untuk layanan kami, Anda memberikan berbagai informasi untuk membantu kami sebaik mungkin mencocokkan Anda dengan relawan atau organisasi sosial yang membutuhkan relawan. Beberapa informasi di Situs ditampilkan secara publik (seperti nama, lokasi, dan profil), ini berarti informasi tersebut dapat dilihat oleh semua pengguna terdaftar dari Situs. Kami tidak akan menampilkan informasi apapun sehubungan dengan alamat/nomor kontak, pengalaman profesional, keterampilan, minat atau biografi Anda tanpa terlebih dahulu mendapat izin dari Anda. Pihak (individu ataupun organisasi) yang telah mendapat izin dari Anda akan dapat melihat informasi ini.</p>

          <p className="font-weight-bold">Informasi Dari Situs Web Lainnya</p>

          <p className="text-justify mb-3">Ketika menghubungkan akun RelaOne Anda dengan layanan internet lainnya, kami akan mengumpulkan informasi tentang Anda dari akun Anda di situs web tersebut. Kami mengumpulkan informasi ini untuk meningkatkan kemampuan kami untuk mencocokkan Anda dengan organisasi sosial atau relawan, dan untuk meningkatkan pengalaman pengguna secara keseluruhan di Situs.</p>

          <p className="font-weight-bold">Email/Telepon</p>

          <p className="text-justify mb-3">Ketika Anda mendaftarkan diri untuk layanan kami, kami memerlukan alamat email yang dapat kami gunakan untuk menghubungi Anda. Jika Anda tidak ingin menerima email promosi dari kami, silahkan lihat bagian Pilihan. Kami berhak untuk mengirimkan email kepada Anda tentang pengumuman layanan, pesan administratif, dan perubahan atas Kebijakan Privasi dan/atau Syarat Penggunaan.</p>

          <p className="text-justify mb-3">Kami juga dapat menghubungi Anda melalui telepon semata-mata sehubungan dengan layanan RelaOne. Jika Anda tidak ingin menerima panggilan telepon dari kami, silahkan hapus nomor telepon Anda dari profil Anda.</p>

          <p className="font-weight-bold">Pengungkapan Informasi Anda untuk Kepentingan Lainnya</p>

          <p className="font-weight-bold">Pengungkapan IIP Anda</p>

          <p className="text-justify mb-3">Tanpa persetujuan Anda, kami tidak akan menjual, menyewakan, atau berbagi IIP Anda dengan pihak ketiga, kecuali sebagaimana dijelaskan dalam Kebijakan Privasi ini. Dalam hal Anda melakukan posting peluang relawan dan/atau menerima kesempatan menjadi relawan melalui Situs, kami menganggap hal tersebut sebagai persetujuan Anda bagi kami untuk mengungkapkan IIP Anda kepada pihak yang cocok.</p>

          <p className="font-weight-bold">Pemasok, Penyedia Layanan dan Pihak Ketiga Lainnya</p>

          <p className="text-justify mb-3">Kami dapat menggunakan pemasok dan/atau penyedia layanan pihak ketiga untuk memfasilitasi layanan kami, dan mereka mungkin memiliki akses ke IIP Anda. Sebagai contoh, kami dapat melakukan outsource atas satu atau lebih aspek Situs ke pemasok atau penyedia layanan sesuai dengan kebutuhan. Meskipun kami berusaha untuk hanya memilih perusahaan terkemuka yang memiliki komitmen yang sama terhadap privasi Anda dan akan membatasi bagaimana pemasok atau penyedia jasa tersebut menggunakan atau mengungkapkan IIP yang mungkin dapat mereka akses sehubungan dengan Situs, kami sama sekali tidak bertanggung jawab atas pihak ketiga tersebut atau kegiatan mereka.</p>

          <p className="text-justify mb-3">Karena faktor-faktor di luar kendali kami, kami tidak bisa sepenuhnya memastikan bahwa informasi Anda tidak akan diakses oleh pihak ketiga. Misalnya, pihak ketiga dapat menghindari langkah-langkah keamanan kami untuk secara tidak sah mencegat atau mengakses informasi Anda.</p>

          <p className="font-weight-bold">Mesin Pencari dan Web Crawler</p>

          <p className="text-justify mb-3">Beberapa IIP yang Anda berikan melalui proses pendaftaran (seperti nama, lokasi, dan foto profil) dapat diakses dan ditampilkan secara publik melalui program sindikasi, mesin pencari, web crawler, dan program sejenis lainnya.</p>

          <p className="font-weight-bold">Mesin Pengungkapan Yang Diperlukan</p>

          <p className="text-justify mb-3">Kami melakukan segala upaya yang wajar untuk melindungi privasi Anda, tetapi kami dapat mengungkapkan IIP Anda bila diperlukan oleh hukum atau jika kami memiliki keyakinan bahwa tindakan tersebut: diperlukan untuk penegakkan Kebijakan Privasi atau Syarat Penggunaan; sesuai dengan prosedur hukum, perintah pengadilan, atau proses hukum; dan/atau melindungi hak, milik, atau keselamatan pribadi RelaOne, anggotanya, atau orang lain.</p>

          <p className="text-justify mb-3">Anda menunjuk kami untuk mengungkapkan informasi tentang Anda kepada penegak hukum atau pejabat pemerintah dalam hal kami, berdasarkan kebijakan kami semata, percaya bahwa hal tersebut diperlukan sehubungan dengan proses hukum atau hal lain yang sesuai dengan kewajiban kami.</p>

          <p className="font-weight-bold">Mesin Cara Mengkaji dan Mengubah Informasi</p>

          <p className="text-justify mb-3">Anda dapat mengontrol informasi yang Anda berikan kepada kami dalam berbagai cara. Jika Anda ingin mengubah informasi di database kami, Anda dapat melakukannya dengan login ke akun Anda dan mengikuti petunjuk. Untuk membatalkan akun, kirim email ke RelaOne@gmail.com dengan judul email “Informasi Pribadi” dari alamat email yang Anda berikan kepada kami saat mendaftar ke Situs.</p>

          <p className="font-weight-bold">Mesin Pembatasan Usia</p>

          <p className="text-justify mb-3">Setiap orang yang memberikan informasi melalui Situs menyatakan bahwa ia berusia 13 tahun atau lebih. Jika Anda adalah orang tua atau wali dari anak di bawah usia 13 tahun yang Anda percaya telah menyerahkan informasi pribadi ke Situs, silahkan hubungi kami segera.</p>

          <p className="text-justify mb-3">Bagi organisasi yang merekrut relawan di bawah usia 18 tahun atau mencari relawan untuk kegiatan yang melibatkan anak-anak di bawah umur, RelaOne sangat menyarankan organisasi tersebut untuk mengambil langkah-langkah perlindungan anak yang dinilai sesuai dengan kebutuhannya. Langkah-langkah dan bentuk perlindungan ini sepenuhnya menjadi tanggung jawab organisasi yang bersangkutan.</p>

          <p className="font-weight-bold">Menghubungi Kami</p>

          <p className="text-justify mb-3">Jika Anda memiliki pertanyaan atau komentar tentang Kebijakan Privasi, praktek-praktek dari Situs, atau pengalaman Anda terkait dengan Situs, silahkan hubungi kami di RelaOne@gmail.com.</p>

          <p className="font-weight-bold">Perubahan Kebijakan Privasi</p>

          <p className="text-justify mb-3">Kami berhak untuk mengubah atau memperbaharui Kebijakan Privasi setiap saat, dan akan memberitahu pengguna dari Situs melalui posting dengan informasi perubahan atau pembaharuan terhadap Kebijakan Privasi di halaman ini. Dalam keadaan tertentu, kami juga dapat memilih untuk memberitahu Anda tentang perubahan atau pembaharuan atas Kebijakan Privasi dengan cara lain, seperti dengan posting pemberitahuan pada halaman awal (homepage) di Situs atau dengan mengirimkan email. Setiap perubahan dan/atau pembaharuan atas Kebijakan Privasi akan berlaku efektif segera setelah ditampilkan (posting) pada Situs dan akan tercermin dari Tanggal Efektif. Apabila Anda terus menggunakan Situs setelah suatu perubahan dan/atau pembaharuan atas Kebijakan Privasi berlaku efektif, berarti Anda menyetujui dan sepakat atas perubahan dan/atau pembaharuan tersebut.</p>

          <p className="font-weight-bold">Keamanan</p>

          <p className="text-justify mb-3">Untuk melindungi privasi dan keamanan pengguna Situs, kami mengambil langkah-langkah yang wajar untuk memverifikasi identitas Anda sebelum memberikan akses profil. Anda bertanggung jawab untuk menjaga kerahasiaan kata sandi dan informasi akun setiap saat. Situs ini memiliki pengamanan yang wajar untuk melindungi terhadap kerugian, penyalahgunaan dan perubahan informasi di bawah kendali kami. Meskipun dengan berbagai upaya ini, kami tidak dapat menjamin bahwa informasi yang Anda kirimkan akan aman, dan bahwa pihak ketiga yang tidak berwenang tidak akan berhasil melanggar upaya pengamanan kami dan mengakses informasi Anda. Jika kami mengetahui dari sistem terdapat pelanggaran keamanan, maka kami akan berusaha memberitahu Anda secara elektronik sehingga Anda dapat mengambil langkah-langkah perlindungan yang tepat. Dengan menggunakan Situs atau memberikan informasi pribadi kepada kami, Anda setuju bahwa kami dapat berkomunikasi dengan Anda secara elektronik mengenai masalah administrasi yang berkaitan dengan penggunaan Situs, keamanan, dan privasi. Jika terjadi pelanggaran keamanan, kami dapat memposting pemberitahuan di Situs atau mengirim email ke alamat email yang Anda berikan kepada saat mendaftar ke Situs.</p>

          <p className="font-weight-bold">Pengguna Internasional</p>

          <p className="text-justify mb-3">Situs ini diselenggarakan di Indonesia. Jika Anda mengakses Situs dari wilayah lain dengan undang-undang atau peraturan yang mengatur mengenai pengumpulan informasi pribadi, penggunaan dan pengungkapan yang berbeda dari hukum Indonesia, perlu diketahui bahwa Anda mentransfer data Indonesia yang mungkin tidak memiliki hukum perlindungan informasi yang sama dengan daerah lain. Dengan menyediakan informasi pribadi, Anda menyetujui:</p>

          <p className="text-justify mb-3">informasi pribadi Anda untuk penggunaan yang telah diidentifikasi di atas sesuai dengan Kebijakan Privasi; dan</p>
          <p className="text-justify mb-3">informasi pribadi Anda ke Indonesia seperti yang disampaikan di atas. Informasi Anda dapat diproses oleh kami di negara di mana itu dikumpulkan, serta negara-negara lain di mana undang-undang tentang pengolahan informasi mungkin kurang ketat daripada hukum di negara Anda.</p>
        </div>
      </div>
    )
  }
}

