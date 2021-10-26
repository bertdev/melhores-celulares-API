const { v4 } = require('uuid');
const PhonesRepository = require('../repositories/PhonesRepository');

const isTextValid = require('../helpers/isTextValid');
const isStartDateValid = require('../helpers/isStartDateValid');
const isSalesPeriodValid = require('../helpers/isSalesPeriodValid');
const formatDateToStore = require('../helpers/formatDateToStore');

class PhonesController {
  async index(request, response) {
    // response.send('<h1> amigo estou aqui</h1>');
    const phones = await PhonesRepository.findAll();

    response.send(phones);
  }

  async show(request, response) {
    const { code } = request.params;

    const phone = await PhonesRepository.findByCode(code);

    if (!phone) {
      return response.status(404).json({ error: 'Celular não encontrado' });
    }

    response.send(phone);
  }

  async store(request, response) {
    const {
      model, price, brand, startDate, endDate, color
    } = request.body;

    if (!isTextValid(model)) {
      return response.status(400).json({ error: 'Este modelo é inválido' });
    }

    if (Number(price) <= 0) {
      return response.status(400).json({ error: 'Este preço é inválido' });
    }

    if (!isTextValid(brand)) {
      return response.status(400).json({ error: 'Esta marca é inválida' });
    }

    if (!isStartDateValid(startDate)) {
      return response.status(400).json({ error: 'Esta data de início é inválida' });
    }

    if (!isSalesPeriodValid({ startDate, endDate })) {
      return response.status(400).json({
        error: 'Este periodo de vendas(datas de início e término) é inválido'
      });
    }

    if (!['BLACK', 'WHITE', 'GOLD', 'PINK'].includes(color.toUpperCase())) {
      return response.status(400).json({ error: 'Esta cor é inválida' });
    }

    const phone = await PhonesRepository.create({
      model,
      price,
      brand,
      startDate: formatDateToStore(startDate),
      endDate: formatDateToStore(endDate),
      color,
      code: v4().slice(0, 8),
    })

    response.send(phone);
  }

  async update(request, response) {
    const { code } = request.params;

    const {
      model, price, brand, startDate, endDate, color
    } = request.body;


    const phoneExists = await PhonesRepository.findByCode(code);
    if (!phoneExists) {
      return response.status(404).json({ error: 'O cadastro que está sendo atualizado não existe' });
    }

    if (!isTextValid(model)) {
      return response.status(400).json({ error: 'Este modelo é inválido' });
    }

    if (Number(price) <= 0) {
      return response.status(400).json({ error: 'Este preço é inválido' });
    }

    if (!isTextValid(brand)) {
      return response.status(400).json({ error: 'Esta marca é inválida' });
    }

    if (!isStartDateValid(startDate)) {
      return response.status(400).json({ error: 'Esta data de início é inválida' });
    }

    if (!isSalesPeriodValid({ startDate, endDate })) {
      return response.status(400).json({
        error: 'Este periodo de vendas(datas de início e término) é inválido'
      });
    }

    if (!['BLACK', 'WHITE', 'GOLD', 'PINK'].includes(color.toUpperCase())) {
      return response.status(400).json({ error: 'Esta cor é inválida' });
    }

    const phone = await PhonesRepository.update({
      model,
      price,
      brand,
      startDate: formatDateToStore(startDate),
      endDate: formatDateToStore(endDate),
      color,
      code,
    });

    response.send(phone);
  }

  async delete(request, response) {
    const { code } = request.params;

    await PhonesRepository.delete(code);

    response.sendStatus(204);
  }
}

module.exports = new PhonesController();
