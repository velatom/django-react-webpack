from django.db import models

from django.contrib.auth.models import User
from django.utils.translation import ugettext as _

# Create your models here.
class Tag(models.Model):
    name = models.CharField(_('name'), max_length=30)
    description = models.TextField(_('description'), blank=True, null=True)
    user = models.ForeignKey(
        User, verbose_name=_('user'), blank=True, null=True,
        on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('tag')
        verbose_name_plural = _('tags')


class Link(models.Model):
    name = models.CharField(_('name'), max_length=30)
    url = models.URLField(_('url'))
    pending = models.BooleanField(_('pending'), default=False)
    description = models.TextField(_('description'), blank=True, null=True)
    tags = models.ManyToManyField(Tag, through='LinkTag', editable=True)
    user = models.ForeignKey(User, verbose_name=_('user'),
                             on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('link')
        verbose_name_plural = _('links')


class LinkTag(models.Model):
    link = models.ForeignKey(Link, verbose_name=_('link'),
                             on_delete=models.CASCADE)

    tag = models.ForeignKey(Tag, verbose_name=_('tag'),
                             on_delete=models.CASCADE)


    class Meta:
        unique_together = (('link', 'tag'))
        verbose_name = _('link x tag')
        verbose_name_plural = _('link x tag')