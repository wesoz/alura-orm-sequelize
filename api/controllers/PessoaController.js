const database = require("../models");

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaPessoa(req, res) {
    try {
      const { id } = req.params;
      const pessoa = await database.pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaPessoa(req, res) {
    try {
      const novaPessoa = req.body;
      const novaPessoaCriada = await database.pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaPessoa(req, res) {
    try {
      const { id } = req.params;
      const pessoaInfos = req.body;
      await database.pessoas.update(pessoaInfos, { where: { id: Number(id) } });
      const pessoaAtualizada = await database.pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaPessoa(req, res) {
    try {
      const { id } = req.params;
      await database.pessoas.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json({ mensagem: `ID ${id} apagado.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaMatricula(req, res) {
    try {
      const { estudanteId, matriculaId } = req.params;
      const matricula = await database.matriculas.findOne({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaMatriculas(req, res) {
    try {
      const { estudanteId } = req.params;
      const matriculas = await database.matriculas.findAll({
        where: { estudante_id: Number(estudanteId) },
      });
      return res.status(200).json(matriculas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaMatricula(req, res) {
    try {
      const { estudanteId } = req.params;
      const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };

      const novaMatriculaCriada = await database.matriculas.create(
        novaMatricula
      );
      return res.status(200).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaMatricula(req, res) {
    try {
      const { estudanteId, matriculaId } = req.params;
      const matriculaInfos = req.body;
      await database.matriculas.update(matriculaInfos, {
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      const matriculaAtualizada = await database.matriculas.findOne({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.status(200).json(matriculaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaMatricula(req, res) {
    try {
      const { matriculaId } = req.params;
      await database.matriculas.destroy({
        where: { id: Number(matriculaId) },
      });
      return res.status(200).json({ mensagem: `ID ${matriculaId} apagado.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
